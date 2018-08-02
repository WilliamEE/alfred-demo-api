/**
 * NotificationsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    get: async (req, res) => {
        try {
            const notifications = await Notification.find().populate('client');
            return res.send({
                'success': true,
                'message': 'notifications fetched',
                'data': notifications
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to fetch notifications'
            });
        }
    },
    create: async(req, res) => {
        try {
            const createdNotification = await Notification.create(req.allParams()).fetch();
            return res.send({
                'success': true,
                'message': 'Successfuly created Notification',
                'data': createdNotification
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to create notification'
            });
        }
    },
    update: async(req, res) => {
        try {
            const updatedNotification = await Notification.update(req.param('id'), req.allParams()).fetch();
            return res.send({
                'success': true,
                'message': 'Notification update successfuly',
                'data': updatedNotification
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to update Notification'
            });
        }
    },
    delete: async(req, res) => {
        try {
            const deletedNotification = await Notification.destroy(req.param('id')).fetch();
            return res.send({
                'success': true,
                'message': 'Notificatione deleted successfuly',
                'data': deletedNotification
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to delete Notification'
            });
        }
    }

};

