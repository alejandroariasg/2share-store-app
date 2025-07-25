-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-07-2025 a las 20:34:26
-- Versión del servidor: 9.3.0
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shoppingdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` bigint NOT NULL,
  `active` int DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `active`, `created_at`, `name`) VALUES
(1, 1, '2025-07-25 03:27:51.792879', 'Laptop'),
(2, 1, '2025-07-25 03:27:51.792891', 'Smartphone'),
(3, 1, '2025-07-25 03:27:51.792895', 'Headphones'),
(4, 2, '2025-07-25 03:27:51.792898', 'Keyboard'),
(5, 1, '2025-07-25 03:27:51.792901', 'Mouse'),
(6, 2, '2025-07-25 03:27:51.792904', 'Monitor'),
(7, 1, '2025-07-25 03:27:51.792906', 'Printer'),
(8, 1, '2025-07-25 03:27:51.792909', 'Camera'),
(9, 1, '2025-07-25 03:27:51.792912', 'Speaker'),
(10, 2, '2025-07-25 03:27:51.792915', 'Tablet'),
(11, 1, '2025-07-25 03:27:51.792918', 'Webcam'),
(12, 1, '2025-07-25 03:27:51.792920', 'Microphone'),
(13, 1, '2025-07-25 03:27:51.792923', 'Hard Drive'),
(14, 2, '2025-07-25 03:27:51.792926', 'SSD'),
(15, 1, '2025-07-25 03:27:51.792928', 'RAM'),
(16, 1, '2025-07-25 03:27:51.792931', 'GPU'),
(17, 2, '2025-07-25 03:27:51.792940', 'CPU'),
(18, 1, '2025-07-25 03:27:51.792944', 'Power Supply'),
(19, 2, '2025-07-25 03:27:51.792948', 'Motherboard'),
(20, 1, '2025-07-25 03:27:51.792952', 'Case');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shopping_list`
--

CREATE TABLE `shopping_list` (
  `id` bigint NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tagged` bit(1) NOT NULL,
  `product_id` bigint NOT NULL,
  `user_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `full_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `shopping_list`
--
ALTER TABLE `shopping_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKnp7tubb5iw3vpredtksnxdtqk` (`product_id`),
  ADD KEY `FKhk61ln2s2kbmuwpf7y0ww67ks` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `shopping_list`
--
ALTER TABLE `shopping_list`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `shopping_list`
--
ALTER TABLE `shopping_list`
  ADD CONSTRAINT `FKhk61ln2s2kbmuwpf7y0ww67ks` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKnp7tubb5iw3vpredtksnxdtqk` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
