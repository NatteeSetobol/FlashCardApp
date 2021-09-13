#/bin/bash

echo "Building React app..."
cd flashcard/
rm -rf build
npm run build
echo "copying files to spring tools..."
cd build
rm -rf flashcard-back/src/main/resources/public
mkdir  flashcard-back/src/main/resources/public
cp -rf flashcard-back/src/main/resources/public
cd ../../flashcard-back/
mvn clean
mvn install
cd target
java -jar flashcard-back-0.0.1-SNAPSHOT.jar
