const transform = (data: any) => {
    return {
        'id': data.uuid,
        'name': data.name,
        'partner_name': data.partner.name,
        'partner_id': data.partner.uuid,
        'user_id': data.user.uuid,
        'registration_number': data.registration_number,
        'tax_identification_number': data.tax_identification_number,
        'address': data.address,
        'logo_url': data.logo_url,
        'email': data.email,
        'admin_user': data.user,
        'mobile': data.mobile,
        'wallet': data.wallet,
        'ledger': data.ledger,
        'phone': data.phone,
        'website': data.website,
        'support_email': data.support_email,
        'api_key': data.api_key,
        'webhook': data.webhook,
        'report_notification': data.report_notification,
        'wallet_notification': data.wallet_notification,
        'wallet_notification_when_balance': data.wallet_notification_when_balance,
        'created_at': data.created_at,
    }
}

export default transform;
