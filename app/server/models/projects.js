const DataModel = require("./data_model");

class Project {
  constructor(id, name, abstract, authors, tags, createdBy) {
    this.id = id;
    this.name = name;
    this.abstract = abstract;
    this.authors = authors;
    this.tags = tags;
    this.createdBy = createdBy;
  }
}

class Projects extends DataModel {
  validate(obj) {
    // Validate that the authors and tags properties are arrays
    // Validate that none of the remaining properties are empty
    // The method should return true if all of the tests pass and false otherwise

    let valid = true;

    for (const item in obj) {
      if (!obj[item] || obj[item] === null) {
        valid = false;
      }
    }

    let arrAuthors = Array.isArray(obj.authors);

    let arrTag = Array.isArray(obj.tags);

    if (arrAuthors && arrTag && valid) {
      return true;
    }
    return false;
  }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
  Project,
  Projects,
};
