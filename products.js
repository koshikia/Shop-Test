const products = [
    {
        "id": 1,
        "name":" Vandal Araxys",
        "price": 350000,
        "image": "./ảnh/Araxys_Vandal.webp",
        "description": "Mô hình mang phong cách tương lai với thiết kế sắc nét, ánh kim lấp lánh và hiệu ứng ánh sáng động, tạo cảm giác công nghệ ngoài hành tinh đầy uy lực."
    },
    {
        "id": 2,
        "name":" Shorty Araxys",
        "price": 350000,
        "image": "./ảnh/Araxys_Shorty.webp",
        "description": "Mô hình mang phong cách tương lai với thiết kế sắc nét, ánh kim lấp lánh và hiệu ứng ánh sáng động, tạo cảm giác công nghệ ngoài hành tinh đầy uy lực."
    },
    {
        "id": 3,
        "name":" Operator Araxys",
        "price": 350000,
        "image": "./ảnh/Araxys_Operator.webp",
        "description": "Mô hình mang phong cách tương lai với thiết kế sắc nét, ánh kim lấp lánh và hiệu ứng ánh sáng động, tạo cảm giác công nghệ ngoài hành tinh đầy uy lực."
    },
    {
        "id": 4,
        "name":" Bulldog Araxys",
        "price": 350000,
        "image": "./ảnh/Araxys_Bulldog.webp",
        "description": "Mô hình mang phong cách tương lai với thiết kế sắc nét, ánh kim lấp lánh và hiệu ứng ánh sáng động, tạo cảm giác công nghệ ngoài hành tinh đầy uy lực."
    },
    {
        "id": 5,
        "name":" Bio Harvester Araxys",
        "price": 800000,
        "image": "./ảnh/Araxys_Bio_Harvester.webp",
        "description": "Mô hình mang phong cách tương lai với thiết kế sắc nét, ánh kim lấp lánh và hiệu ứng ánh sáng động, tạo cảm giác công nghệ ngoài hành tinh đầy uy lực."
    },
    {
        "id": 6,
        "name":" Vandal Prelude to Chaos",
        "price": 350000,
        "image": "./ảnh/Prelude_to_Chaos_Vandal.webp",
        "description": "Mô hình mang đến một thiết kế đầy ấn tượng với các chi tiết sắc nét, kết hợp cùng ánh sáng động mạnh mẽ và các yếu tố kim loại bóng bẩy. Với màu sắc tối tăm, hiệu ứng ánh sáng lấp lánh, skin này tạo cảm giác quyền lực và đầy tính công nghệ, như thể mang đến một sức mạnh vượt trội từ một thế giới ngoài vũ trụ."
    },
    {
        "id": 7,
        "name":" Shorty Prelude to Chaos",
        "price": 350000,
        "image": "./ảnh/Prelude_to_Chaos_Shorty.webp",
        "description": "Mô hình mang đến một thiết kế đầy ấn tượng với các chi tiết sắc nét, kết hợp cùng ánh sáng động mạnh mẽ và các yếu tố kim loại bóng bẩy. Với màu sắc tối tăm, hiệu ứng ánh sáng lấp lánh, skin này tạo cảm giác quyền lực và đầy tính công nghệ, như thể mang đến một sức mạnh vượt trội từ một thế giới ngoài vũ trụ."
    },
    {
        "id": 8,
        "name":" Stinger Prelude to Chaos",
        "price": 350000,
        "image": "./ảnh/Prelude_to_Chaos_Stinger.webp",
        "description": "Mô hình mang đến một thiết kế đầy ấn tượng với các chi tiết sắc nét, kết hợp cùng ánh sáng động mạnh mẽ và các yếu tố kim loại bóng bẩy. Với màu sắc tối tăm, hiệu ứng ánh sáng lấp lánh, skin này tạo cảm giác quyền lực và đầy tính công nghệ, như thể mang đến một sức mạnh vượt trội từ một thế giới ngoài vũ trụ."
    },
    {
        "id": 9,
        "name":" Operator Prelude to Chaos",
        "price": 350000,
        "image": "./ảnh/Prelude_to_Chaos_Operator.webp",
        "description": "Mô hình mang đến một thiết kế đầy ấn tượng với các chi tiết sắc nét, kết hợp cùng ánh sáng động mạnh mẽ và các yếu tố kim loại bóng bẩy. Với màu sắc tối tăm, hiệu ứng ánh sáng lấp lánh, skin này tạo cảm giác quyền lực và đầy tính công nghệ, như thể mang đến một sức mạnh vượt trội từ một thế giới ngoài vũ trụ."
    },
    {
        "id": 10,
        "name":" Blade Of Chaos",
        "price": 800000,
        "image": "./ảnh/Blade_of_Chaos.webp",
        "description": "Mô hình mang đến một thiết kế đầy ấn tượng với các chi tiết sắc nét, kết hợp cùng ánh sáng động mạnh mẽ và các yếu tố kim loại bóng bẩy. Với màu sắc tối tăm, hiệu ứng ánh sáng lấp lánh, skin này tạo cảm giác quyền lực và đầy tính công nghệ, như thể mang đến một sức mạnh vượt trội từ một thế giới ngoài vũ trụ."
    },
    {
        "id": 11,
        "name":" Phantom Reaver",
        "price": 250000,
        "image": "./ảnh/Reaver_Phantom.webp",
        "description": "Mô hình có thiết kế đen tối đầy ma mị với các chi tiết sắc bén và tinh xảo, kết hợp cùng ánh sáng huyền bí và hiệu ứng âm thanh ấn tượng. Mỗi vũ khí mang một vẻ đẹp u ám, với màu sắc chủ đạo là đen và tím, tạo nên cảm giác mạnh mẽ và huyền bí, như thể vũ khí này được chế tác từ bóng tối và sức mạnh siêu nhiên."
    },
    {
        "id": 12,
        "name":" Ghost Reaver",
        "price": 250000,
        "image": "./ảnh/Reaver_Ghost.webp",
        "description": "Mô hình có thiết kế đen tối đầy ma mị với các chi tiết sắc bén và tinh xảo, kết hợp cùng ánh sáng huyền bí và hiệu ứng âm thanh ấn tượng. Mỗi vũ khí mang một vẻ đẹp u ám, với màu sắc chủ đạo là đen và tím, tạo nên cảm giác mạnh mẽ và huyền bí, như thể vũ khí này được chế tác từ bóng tối và sức mạnh siêu nhiên."
    },
    {
        "id": 13,
        "name":" Odin Reaver",
        "price": 250000,
        "image": "./ảnh/Reaver_Odin.webp",
        "description": "Mô hình có thiết kế đen tối đầy ma mị với các chi tiết sắc bén và tinh xảo, kết hợp cùng ánh sáng huyền bí và hiệu ứng âm thanh ấn tượng. Mỗi vũ khí mang một vẻ đẹp u ám, với màu sắc chủ đạo là đen và tím, tạo nên cảm giác mạnh mẽ và huyền bí, như thể vũ khí này được chế tác từ bóng tối và sức mạnh siêu nhiên."
    },
    {
        "id": 14,
        "name":" Spectre Reaver",
        "price": 250000,
        "image": "./ảnh/Reaver_Spectre.webp",
        "description": "Mô hình có thiết kế đen tối đầy ma mị với các chi tiết sắc bén và tinh xảo, kết hợp cùng ánh sáng huyền bí và hiệu ứng âm thanh ấn tượng. Mỗi vũ khí mang một vẻ đẹp u ám, với màu sắc chủ đạo là đen và tím, tạo nên cảm giác mạnh mẽ và huyền bí, như thể vũ khí này được chế tác từ bóng tối và sức mạnh siêu nhiên."
    },
    {
        "id": 15,
        "name":" Karambit Reaver",
        "price": 900000,
        "image": "./ảnh/Reaver_Karambit.webp",
        "description": "Mô hình có thiết kế đen tối đầy ma mị với các chi tiết sắc bén và tinh xảo, kết hợp cùng ánh sáng huyền bí và hiệu ứng âm thanh ấn tượng. Mỗi vũ khí mang một vẻ đẹp u ám, với màu sắc chủ đạo là đen và tím, tạo nên cảm giác mạnh mẽ và huyền bí, như thể vũ khí này được chế tác từ bóng tối và sức mạnh siêu nhiên."
    },
];
export default products;