const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const axios = require('axios');

module.exports = {
    // Select all `allnft` records based on status and genre query parameters
    selectAll: async function(req, res) {
        try {
            const { status, genre } = req.query;
            const allnft = await prisma.allnft.findMany({
                where: {
                    ...(status && { status }),
                    ...(genre && { genre }),
                }
            });
            res.status(200).json(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error fetching records.' });
        }
    },
    
    // Select one `allnft` record based on the `id` parameter
    selectOne: async function(req, res) {
        try {
            const allnft = await prisma.allnft.findUnique({
                where: { id: parseInt(req.params.id) }
            });
            
            if (!allnft) {
                return res.status(404).json({ msg: 'Record not found.' });
            }
            
            res.status(200).json(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error fetching record.' });
        }
    },
    
    // Add a new `allnft` record
    addOne: async function(req, res) {
        try {
            const allnft = await prisma.allnft.create({
                data: req.body
            });
            res.status(201).json(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error adding record.' });
        }
    },
    
    // Delete an `allnft` record based on the `id` parameter
    deleteOne: async function(req, res) {
        try {
            const allnft = await prisma.allnft.delete({
                where: { id: parseInt(req.params.id) }
            });
            res.status(200).json({ msg: 'Record deleted successfully.' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error deleting record.' });
        }
    },
    
    // Update an `allnft` record based on the `id` parameter
    UpdateOne: async function(req, res) {
        try {
            const allnft = await prisma.allnft.update({
                where: { id: parseInt(req.params.id) },
                data: req.body
            });
            res.status(200).json(allnft);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error updating record.' });
        }
    },
    
    // Add a payment using Flouci API
    add: async function(req, res) {
        const url = "https://developers.flouci.com/api/generate_payment";
        const payload = {
            "app_token": process.env.APP_TOKEN,
            "app_secret": process.env.APP_SECRET,
            "amount": req.body.amount,
            "accept_card": true,
            "session_timeout_secs": 1200,
            "success_link": req.body.successLink || "http://localhost:3000/success",
            "fail_link": req.body.failLink || "http://localhost:3000/fail",
            "developer_tracking_id": req.body.developerTrackingId || "default_tracking_id"
        };

        try {
            const result = await axios.post(url, payload);
            res.status(200).json(result.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error adding payment.' });
        }
    },
    
    // Verify payment using Flouci API
    verify: async function(req, res) {
        try {
            const result = await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'apppublic': process.env.APP_TOKEN,
                    'appsecret': process.env.APP_SECRET
                }
            });
            res.status(200).json(result.data);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Error verifying payment.' });
        }
    }
};
