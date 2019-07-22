const contactsDb = require('../models/contactsModel');
const express = require('express');

const router = express.Router(); 

router.get('/contacts', (req, res) => {
  
    contactsDb.getContacts()
    .then(response => {
        if (response.length > 0)
            res.status(200).json({contacts: response});
        else
            res.status(404).json({ message: "No contacts found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.post('/contacts', (req, res) => {
  
    contactsDb.addContact(req.body)
    .then(response => {
            res.status(200).json({message: "Contact added", id: response});  
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.delete("/contacts/:id", (req, res) => {

    contactsDb
      .deleteContact(req.params.id)
      .then(response => {
        if (response === 0)
            res.status(404).json({ message: "Contact not found" });
        else
            res.status(200).json({ message: "Contact Deleted" });
      })
      .catch(error => {
        res.status(500).json({ error: error.message });
      });
  });

router.get('/contacts/:id/messages', (req, res) => {
  
    contactsDb.getMessage(req.params.id)
    .then(response => {
        if (response.length > 0)
            res.status(200).json({messages: response});
        else
            res.status(404).json({ message: "No messages found" });
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

router.post('/contacts/:id/messages', (req, res) => {
  
    contactsDb.addMessage({contact_id: req.params.id, message: req.body.message})
    .then(response => {
            res.status(200).json({message: "Message added", id: response});  
    })
    .catch(error => {
        res.status(500).json({error: error.message});
    });
});

module.exports = router;
