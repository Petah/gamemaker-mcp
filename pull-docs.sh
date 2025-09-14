#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

pushd "$DIR/docs"

wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains manual.gamemaker.io --no-parent --wait=1 --random-wait --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/GML_Reference.htm

wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains manual.gamemaker.io --no-parent --wait=1 --random-wait --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" https://manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/GML_Overview.htm

wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains manual.gamemaker.io --no-parent --wait=1 --random-wait --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" https://manual.gamemaker.io/monthly/en/Additional_Information/Additional_Information.htm

popd
