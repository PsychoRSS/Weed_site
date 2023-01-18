const db = require('../Config/connection')
const {Dab, Flower} = require('../models')

const Data = require('./seed.json')
const DabData = require('./DabData')
db.once('open', async () => {
    await Flower.deleteMany({})
    await Dab.deleteMany({})

    const Weed =  await Flower.insertMany(Data);
    const eldab =  await Dab.insertMany(DabData);
  

    for (newClass of Weed) {
        // randomly add each class to a school
        const tempSchool = Weed[Math.floor(Math.random() * Weed.length)];
        tempSchool.Weed.push();
        await tempSchool.save();
    
        // randomly add a professor to each class
    //     const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
    //     newClass.professor = tempProfessor._id;
    //     await newClass.save();
    
    //     // reference class on professor model, too
    //     tempProfessor.classes.push(newClass._id);
    //     await tempProfessor.save();
      }
    
    console.log('good');
    process.exit(0);
})


  