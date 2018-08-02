/**
 * ClientsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    get: async (req, res) => {
        try {
            const clients = await Client.find().populate('notifications');
            return res.send({
                'success': true,
                'message': 'Clients fetched',
                'data': clients
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to fetch clients'
            });
        }
    },
    create: async(req, res) => {
        try {
            const createdClient = await Client.create(req.allParams()).fetch();
            return res.send({
                'success': true,
                'message': 'Successfuly created client',
                'data': createdClient
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to create clients'
            });
        }
    },
    update: async(req, res) => {
        try {
            const updatedClient = await Client.update(req.param('id'), req.allParams()).fetch();
            return res.send({
                'success': true,
                'message': 'Client update successfuly',
                'data': updatedClient
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to update client'
            });
        }
    },
    delete: async(req, res) => {
        try {
            const deletedClient = await Client.destroy(req.param('id')).fetch();
            return res.send({
                'success': true,
                'message': 'Cliente deleted successfuly',
                'data': deletedClient
            });
        } catch (error) {
            sails.log.debug(error);
            return res.send({
                'success': false,
                'message': 'Unable to delete client'
            });
        }
    }
};

