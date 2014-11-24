#!/bin/bash
#curl --user "caspyin" --request POST --data '{"description":"Created via API","public":"true","files":{"file1.txt":{"content":"Demo"}}' https://api.github.com/gists
echo {\
  \"title\": \"$(date | cut -d ":" -f1)\"\
} > json.txt
curl --user "chackerian" --request POST --data @json.txt https://api.github.com/repos/chackerian/Trades/issues