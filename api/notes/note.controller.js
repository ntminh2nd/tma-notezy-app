const {
  create,
  getNotes,
  getNoteById,
  getNoteByTitleSearch,
  updateNote,
  deleteNote,
} = require("./note.service");

require("dotenv").config();

const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createNote: (req, res) => {
    const body = req.body;
    create(body, (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          success: 0,
          message: "Database connection error.",
        });
      }
      return res.status(200).json({
        success: 1,
        message: results,
      });
    });
  },
  getNoteById: (req, res) => {
    const id = req.params.id;
    getNoteById(id, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "Note not found.",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  getNotes: (req, res) => {
    getNotes((error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
  updateNote: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    updateNote(id, body, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "Note updated successfully.",
      });
    });
  },
  deleteNote: (req, res) => {
    const id = req.params.id;
    const body = req.body;
    deleteNote(id, body, (error, results) => {
      if (error) {
        console.log(error);
        return;
      }
      return res.json({
        success: 1,
        message: "Note deleted successfully.",
      });
    });
  },
  search: (req, res) => {
    const body = req.body;
    getNoteByTitleSearch(body.input, (error, results) => {
      if (error) {
        console.log(error);
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "No result.",
        });
      }
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
