const mongodb = require('../db/connect')

const buildHome = (req, res) => {
    res.send('Home Page?');
}

const buildProfessional = async (req, res) => {
    const result = await mongodb.getDb().db().collection('user').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-type', 'application/json');
        res.status(200).json(lists[0].user);
    })

    // const data = {
    //     professionalName: "Robert Lowry",
    //     base64Image: "IMAGE",
    //     nameLink: {
    //         firstName: "Robert",
    //         url: "NAMELINKURL"
    //     },
    //     primaryDescription: "PRIMARY DESCRIPTION?",
    //     workDescription1: "WORK DESCRIPTION 1?",
    //     workDescription2: "WORK DESCRIPTION 2?",
    //     linkTitleText: "LINK TITLE TEXT",
    //     linkedInLink: {
    //         text: "LINKED IN TEXT",
    //         link: "LINKED IN URL"
    //     },
    //     githubLink: {
    //         text: "GITHUB TEXT",
    //         link: "GITHUB URL"
    //     }
    // };
    // res.send(data);
}

module.exports = { buildHome, buildProfessional }