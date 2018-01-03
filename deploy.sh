#!/bin/bash

test_mode=false
if [[ "$1" == "test" ]] || [[ "$3" == "test" ]]; then
    test_mode=true
fi

if [[ false == $test_mode ]]; then

    set -o errexit -o nounset

    if [ "$TRAVIS_BRANCH" != "master" ]
    then
        echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
        exit 0
    fi

    rev=$(git rev-parse --short HEAD)

    mkdir deploy
    cd deploy

    echo $GH_TOKEN | cut -c1-5

    git init
    git config user.name "Travis"
    git config user.email "github@marinetti.fr"

    git remote add origin "https://$GH_TOKEN@github.com/Asenar/possedex-website"
else
    echo "Push cancelled (test mode)"
fi

git fetch origin

git reset --hard origin/master

python fetch-v2.py

changes=$(git status -uno -s)

if [[ -n $changes ]]; then
    date=$(date)
    git add docs/database.json
    git commit -m"Update with $rev ($date)"
    if [[ false == $test_mode ]]; then
        git push origin master:master
    else
        echo "Push cancelled (test mode)"
    fi
else
    echo "Aucun changement détecté"
fi

