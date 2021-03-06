const transform = (data: any) => {
    return {
        'id': data.uuid,
        'name': data.name,
        'email': data.email,
        'mobile': data.mobile,
        'phone': data.phone,
        'website': data.website,
        'street': data.street,
        'city': data.city,
        'state': data.state,
        'landmark': data.landmark,
        'packages': data.packages,
        'country': data.country,
        'wallet': data.wallet,
        'ledger': data.ledger,
        'admin_user': data.user,
        'data_channel': data.email,
        'facebook_link': data.facebook_link,
        'twitter_link': data.twitter_link,
        'google_link': data.google_link,
        'left_logo': data.left_logo,
        'left_logo_url': data.left_logo_url,
        'right_logo': data.right_logo,
        'right_logo_url': data.right_logo_url,
        'token': data.api_key,
        'webhook': data.webhook,
        'states': data.states,
        'report_notification': data.report_notification,
        'wallet_notification': data.wallet_notification,
        'wallet_notification_when_balance': data.wallet_notification_when_balance,
        'created_at': data.created_at,
    }
}

export default transform;
