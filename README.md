#API Đăng nhập và Đăng xuất

##API này cung cấp các chức năng đăng nhập và đăng xuất cho người dùng.

###Route:
####Đăng nhập: /login
####Đăng xuất: /logout
###Tham số:
####Đăng nhập:
#####email: Địa chỉ email của người dùng.
#####password: Mật khẩu của người dùng.
####Đăng xuất:
#####accessToken: Mã thông báo truy cập của người dùng.
#####userId: ID của người dùng.
#####Trả về:
####Đăng nhập:
#####accessToken: Mã thông báo truy cập của người dùng.
#####userId: ID của người dùng.
#####Đăng xuất:
#####Thành công: 200 OK
#####Thất bại: 401 Unauthorized
