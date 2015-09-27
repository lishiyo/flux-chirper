import crypto from 'crypto';

function avatar(email) {
    if (!email) return '';

    let base = 'http://www.gravatar.com/avatar/';
    email = crypto.createHash('md5').update(email).digest('hex');

    // 92 pixels
    return base + email + '?s=92';
}

export default {
    avatar: avatar
};
