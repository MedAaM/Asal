const Report = require('../models/reportModel');

async function createReport(req, res) {
    const { reportedUserId, reportType, description, evidence } = req.body;
    const reporterId = req.user._id; 

    try {
        const newReport = new Report({
            reportedUserId,
            reporterId,
            reportType,
            description,
            evidence
        });

        await newReport.save();
        res.status(201).json(newReport);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function getAllReports(req, res) {
    try {
        const reports = await Report.find().sort({ createdAt: -1 });
        res.json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function getReportById(req, res) {
    const reportId = req.params.id;

    try {
        const report = await Report.findById(reportId);
        if (!report) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.json(report);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function updateReport(req, res) {
    const reportId = req.params.id;
    const updates = req.body;

    try {
        const updatedReport = await Report.findByIdAndUpdate(reportId, updates, { new: true });
        if (!updatedReport) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.json(updatedReport);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


async function deleteReport(req, res) {
    const reportId = req.params.id;

    try {
        const deletedReport = await Report.findByIdAndDelete(reportId);
        if (!deletedReport) {
            return res.status(404).json({ error: 'Report not found' });
        }
        res.json({ message: 'Report deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = {
    createReport,
    getAllReports,
    getReportById,
    updateReport,
    deleteReport
};
