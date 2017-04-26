
	const crypto = require('crypto');

	module.exports = {

		MD5_SUFFIX: 'HSHYE979hdkshd94j4hhh3ijhsjhi44udf94494',

		md5: function(str) {
			let obj = crypto.createHash('md5'); // create a signed object

			obj.update(str);

			return obj.digest('hex');

		}
	}