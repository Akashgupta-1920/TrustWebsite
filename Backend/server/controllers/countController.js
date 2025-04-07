import Count from "../models/Count.js";

export const incrementCount = async (req, res) => {
    try {
        let countDoc = await Count.findOne();

        if (!countDoc) {
            countDoc = new Count({
                totalVisitors: 0,
                todayVisitors: 0,
                lastUpdated: new Date(),
            });
        }

        const today = new Date();
        const lastUpdatedDate = new Date(countDoc.lastUpdated);

        // Reset today's visitors if the date has changed
        if (
            today.getDate() !== lastUpdatedDate.getDate() ||
            today.getMonth() !== lastUpdatedDate.getMonth() ||
            today.getFullYear() !== lastUpdatedDate.getFullYear()
        ) {
            countDoc.todayVisitors = 0;
        }

        countDoc.totalVisitors += 1;
        countDoc.todayVisitors += 1;
        countDoc.lastUpdated = today; // Update lastUpdated timestamp

        await countDoc.save();

        res.status(200).json({
            success: true,
            totalVisitors: countDoc.totalVisitors,
            todayVisitors: countDoc.todayVisitors,
            // lastUpdated:lastUpdatedDate
        });

    } catch (error) {
        console.error("Error updating visitor count:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
