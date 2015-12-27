import { MisskeyExpressRequest } from '../../../../../misskey-express-request';
import { MisskeyExpressResponse } from '../../../../../misskey-express-response';
import requestApi from '../../../../../utils/request-api';

module.exports = (req: MisskeyExpressRequest, res: MisskeyExpressResponse): void => {
	'use strict';

	requestApi('posts/user-timeline', {
		'user-id': req.data.user.id,
		'limit': 10
	}, req.user).then((timeline: any[]) => {
		res.display({
			user: req.data.user,
			timeline: timeline
		});
	});
};
