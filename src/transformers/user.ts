const transform = (data: any) => {
    return {
        'id': data.uuid,
        'name': `${data.last_name} ${data.middle_name} ${data.first_name}`,
        'first_name': data.first_name,
        'middle_name': data.middle_name,
        'last_name': data.last_name,
        'gender': data.gender,
        'api_key': data.api_key,
        'email': data.email,
        'country': data.country,
        'mobile': data.mobile,
        'roles': data.roles,
        'user_type': data.type,
        'permissions': data.permissions,
        'roles_permissions': data.permissions,
        'created_at': data.created_at,
    }
}

export default transform;
