#/bin/bash

echo "Building React app..."
cd flashcard-front/
rm -rf build
npm run build
echo "copying files to spring tools..."
cd build
rm -rf ~/code/flashcardapp/flashcard-back/src/main/resources/public
mkdir  ~/code/flashcardapp/flashcard-back/src/main/resources/public
cp -rf ./* ~/code/flashcardapp/flashcard-back/src/main/resources/public
cd ~/code/flashcardapp/flashcard-back/
mvn clean
mvn install
cd target
java -jar flashcard-back-0.0.1-SNAPSHOT.jar
