import Logs from '../models/logModel.js';
import Users from '../models/userModel.js';

export const logEvent = async (userId, action, tableName, recordId = null) => {
  try {
    await Logs.create({ userId: userId, action, table_name: tableName, recordId: recordId });
  } catch (error) {
    console.error('Error logging event:', error);
  }
}


// Inside your update operation
export const updateData = async (req, res) => {

  try {
    // Perform the update operation

    const { userId, recordId } = req.params;
    // Log the event
    await logEvent(userId, 'update', 'your_table_name', recordId);
  } catch (error) {
    console.error('Error updating data:', error);
  }
}


// Retrieve logs for a specific user
export const getUserLogs = async (req, res) => {

  // const { userId } = req.params;
  try {
    const logs = await Logs.findAll({ include: [Users], order: [['id', 'DESC']] });
    return res.json(logs);
  } catch (error) {
    console.error('Error retrieving logs:', error);
  }
}
