/**
 * Structured error classes following Node.js 2025 best practices
 * Provides rich context and structured error handling
 */

export class AppError extends Error {
    constructor(message, code, statusCode = 500, context = {}) {
        super(message);
        this.name = this.constructor.name;
        this.code = code;
        this.statusCode = statusCode;
        this.context = context;
        this.timestamp = new Date().toISOString();

        // Capture stack trace
        Error.captureStackTrace(this, this.constructor);
    }

    toJSON() {
        return {
            name: this.name,
            message: this.message,
            code: this.code,
            statusCode: this.statusCode,
            context: this.context,
            timestamp: this.timestamp,
            stack: this.stack
        };
    }
}

export class ValidationError extends AppError {
    constructor(message, field, value, context = {}) {
        super(message, 'VALIDATION_ERROR', 400, { field, value, ...context });
    }
}

export class FileNotFoundError extends AppError {
    constructor(filePath, context = {}) {
        super(`File not found: ${filePath}`, 'FILE_NOT_FOUND', 404, { filePath, ...context });
    }
}

export class ParseError extends AppError {
    constructor(message, filePath, context = {}) {
        super(`Parse error in ${filePath}: ${message}`, 'PARSE_ERROR', 422, { filePath, ...context });
    }
}

export class IndexError extends AppError {
    constructor(message, context = {}) {
        super(`Index error: ${message}`, 'INDEX_ERROR', 500, context);
    }
}

export class ConversionError extends AppError {
    constructor(message, inputPath, outputPath, context = {}) {
        super(`Conversion failed: ${message}`, 'CONVERSION_ERROR', 500, {
            inputPath,
            outputPath,
            ...context
        });
    }
}

/**
 * Error handler utility for consistent error processing
 */
export class ErrorHandler {
    static handle(error, context = {}) {
        // If it's already an AppError, just add context
        if (error instanceof AppError) {
            error.context = { ...error.context, ...context };
            return error;
        }

        // Convert generic errors to AppError
        if (error.code === 'ENOENT') {
            return new FileNotFoundError(error.path, { originalError: error.message, ...context });
        }

        if (error.code === 'EACCES') {
            return new AppError(
                `Permission denied: ${error.path}`,
                'PERMISSION_DENIED',
                403,
                { path: error.path, originalError: error.message, ...context }
            );
        }

        // Generic error wrapper
        return new AppError(
            error.message || 'Unknown error occurred',
            'GENERIC_ERROR',
            500,
            { originalError: error.message, stack: error.stack, ...context }
        );
    }

    static async wrapAsync(fn, context = {}) {
        try {
            return await fn();
        } catch (error) {
            throw this.handle(error, context);
        }
    }

    static logError(error) {
        if (error instanceof AppError) {
            console.error(`[${error.code}] ${error.message}`, {
                statusCode: error.statusCode,
                context: error.context,
                timestamp: error.timestamp
            });
        } else {
            console.error('Unexpected error:', error);
        }
    }
}

/**
 * Performance monitoring utilities following Node.js 2025 best practices
 */
export class PerformanceMonitor {
    static timers = new Map();

    static start(label) {
        this.timers.set(label, process.hrtime.bigint());
    }

    static end(label) {
        const startTime = this.timers.get(label);
        if (!startTime) {
            console.warn(`Timer '${label}' was not started`);
            return null;
        }

        const endTime = process.hrtime.bigint();
        const duration = Number(endTime - startTime) / 1_000_000; // Convert to milliseconds
        this.timers.delete(label);

        if (duration > 1000) {
            console.warn(`Slow operation detected: ${label} took ${duration.toFixed(2)}ms`);
        }

        return duration;
    }

    static async measure(label, fn) {
        this.start(label);
        try {
            const result = await fn();
            const duration = this.end(label);
            console.log(`${label}: ${duration?.toFixed(2)}ms`);
            return result;
        } catch (error) {
            this.end(label);
            throw error;
        }
    }
}