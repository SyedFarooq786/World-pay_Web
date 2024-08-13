import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('d90bf09c-907f-47a6-b522-c81ec84034d4', '1Lorenza4@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_J0l8K9eG0d8h', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1987654321', 'IN', 'AUD');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('ad15020e-8c92-4ebb-9d67-eb7b19f6b47d', '10Jett13@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=12', 'cus_J0l8K9eG0d8k', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1212345678', 'AU', 'AUD');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('b7b833b9-49c3-4ae5-b759-b4684bb70a36', '19Fiona.Muller-Franecki@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=21', 'cus_J0l8K9eG0d8j', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1987654321', 'AU', 'CAD');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('fdc7e869-fd98-499a-8cb6-3eb891457ec4', '28Chelsea.Nolan69@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=30', 'cus_J0l8K9eG0d8j', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1234567890', 'US', 'USD');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('09b156ff-5083-4001-88f8-b7519c549dc6', '37Letha_Bosco@hotmail.com', 'Charlie Davis', 'https://i.imgur.com/YfJQV5z.png?id=39', 'cus_J0l8K9eG0d8j', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1234567890', 'IN', 'INR');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('0bdc46b1-a3cf-4ebf-ba92-8e5acdcda27e', '46Perry.Padberg@yahoo.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=48', 'cus_J0l8K9eG0d8k', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1098765432', 'US', 'USD');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('1427252d-64c3-4f0d-a596-373a3f29b56b', '64Nicholas89@gmail.com', 'Alice Jones', 'https://i.imgur.com/YfJQV5z.png?id=66', 'cus_J0l8K9eG0d8l', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1234567890', 'GB', 'AUD');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('e1c437e4-a0f6-4328-a854-0b9f4d03b392', '73Rahul.Beier@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=75', 'cus_J0l8K9eG0d8i', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1123456789', 'GB', 'USD');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password", "phoneNumber", "countryCode", "currency") VALUES ('e7f9592f-2116-4fee-a60e-34ffc93ada54', '82Augustine.Rice74@gmail.com', 'Bob Brown', 'https://i.imgur.com/YfJQV5z.png?id=84', 'cus_J0l8K9eG0d8j', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC', '1098765432', 'CA', 'USD');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('e7fca057-f5d5-4588-b0da-512a89fbf1ae', 'm1n2b3v4c5x6z7a8s9d0', '{"caveo":"suscipio","alveus":"curto","suasoria":"alveus","aeternus":"versus","deduco":"valens"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('6adeb7f5-823b-4b3a-b36b-13b4c13131d2', 'z9y8x7w6v5u4t3s2r1q0', '{"officiis":"censura","accusamus":"caterva","sto":"urbs","templum":"unus","calcar":"tersus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('43e9efb2-dc69-4361-9c0e-d1a3370f3a10', 'a1b2c3d4e5f6g7h8i9j0', '{"bis":"atqui","artificiose":"thema","vomica":"thesis","infit":"adeo","fugit":"sui"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('e2eee226-bdfa-42d9-a71e-bbb740b7b6ac', 'z9y8x7w6v5u4t3s2r1q0', '{"cenaculum":"claro","cras":"vinum","validus":"talis","conforto":"defleo","summopere":"tui"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('7c0a05e5-f7b9-442b-8809-0e4448dce1bb', 'm1n2b3v4c5x6z7a8s9d0', '{"vito":"summa","casso":"abbas","tametsi":"quidem"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('687d3349-1819-4f3b-b03c-f9fb3d1f063e', 'z9y8x7w6v5u4t3s2r1q0', '{"vallum":"dolorem","odit":"trado","sol":"communis","casus":"taedium","ago":"voluptas"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f80642aa-3b8a-4085-8dcc-b9534d646414', 'p0o9i8u7y6t5r4e3w2q1', '{"theologus":"tempus","bestia":"inflammatio","iste":"expedita"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('3c3283f5-3dbc-47e6-b8e6-76c8b546cd28', 'p0o9i8u7y6t5r4e3w2q1', '{"aro":"cado","thesaurus":"cupressus","conicio":"tero","cerno":"sodalitas"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('452e213d-3876-4d4a-80d5-cf53a01360cc', 'l9k8j7h6g5f4d3s2a1p0', '{"bellicus":"labore","aduro":"valens","valens":"tergeo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('eca478c1-b027-4242-9be2-af63b53fa2c5', 'z9y8x7w6v5u4t3s2r1q0', '{"valde":"currus","pecus":"casso","attero":"pecco","thesis":"clementia"}'::jsonb);

INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('0c6c3250-05ab-4c08-b96d-4eb1d6fddc57', 206, 'AUD', 'completed', '2024-11-20T05:06:22.973Z', '2025-01-15T14:05:04.069Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('bd35683b-34ea-4072-9bcf-a188656a272f', 246, 'EUR', 'completed', '2024-11-15T15:54:14.156Z', '2025-06-11T17:33:52.744Z', 'e1c437e4-a0f6-4328-a854-0b9f4d03b392');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('d94f84a2-8603-4fb7-92ad-73f9dea71b6d', 789, 'AUD', 'pending', '2024-03-24T03:54:48.484Z', '2024-02-19T13:35:57.150Z', 'fdc7e869-fd98-499a-8cb6-3eb891457ec4');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('c4e73dfb-9b27-4751-8630-415a766a12ec', 563, 'USD', 'completed', '2025-04-29T07:34:21.273Z', '2024-03-08T09:28:07.769Z', 'fdc7e869-fd98-499a-8cb6-3eb891457ec4');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('d8348e3d-cf62-48c1-b993-64bd0317228b', 457, 'GBP', 'failed', '2023-11-02T08:27:22.300Z', '2023-10-02T14:04:24.132Z', 'e7f9592f-2116-4fee-a60e-34ffc93ada54');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('9fd6b6fc-af01-4338-aee4-3debf6e73dba', 10, 'EUR', 'refunded', '2025-03-31T21:59:44.235Z', '2024-10-13T15:55:16.787Z', '0bdc46b1-a3cf-4ebf-ba92-8e5acdcda27e');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('211668e0-4df6-4834-98cb-82213174aaee', 973, 'USD', 'failed', '2025-06-11T05:07:00.563Z', '2024-04-04T02:39:25.236Z', '1427252d-64c3-4f0d-a596-373a3f29b56b');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('1a88c3e0-8efe-421e-9238-cbe1ade184f8', 485, 'GBP', 'processing', '2023-08-31T07:09:11.002Z', '2025-02-11T11:56:19.875Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('5520809e-c424-40c0-92d4-9e8cf2c64060', 795, 'EUR', 'completed', '2024-11-14T18:12:30.660Z', '2024-08-13T22:29:06.946Z', 'd90bf09c-907f-47a6-b522-c81ec84034d4');
INSERT INTO "Payment" ("id", "amount", "currency", "status", "initiatedAt", "completedAt", "userId") VALUES ('a7dfb8f7-cee6-4303-bee2-905bcc2bc8fa', 388, 'GBP', 'completed', '2023-11-24T18:23:21.833Z', '2025-02-27T13:38:52.453Z', '0bdc46b1-a3cf-4ebf-ba92-8e5acdcda27e');

INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('359196ae-467f-4e63-a78c-218f4b0caa3f', 'charliebank', 'J1K2L3', '0c6c3250-05ab-4c08-b96d-4eb1d6fddc57');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('ca8c6f76-483c-44e5-b64f-38fa0a647f13', 'bob123upi', 'A1B2C3', '1a88c3e0-8efe-421e-9238-cbe1ade184f8');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('8435ddfc-b4f4-440d-a93e-4eca7f63fd08', 'user123bank', 'J1K2L3', 'd8348e3d-cf62-48c1-b993-64bd0317228b');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('331367fa-88bc-4a95-8b0a-64d7524c15c2', 'charliebank', 'J1K2L3', '9fd6b6fc-af01-4338-aee4-3debf6e73dba');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('e2ec277a-762a-4233-abf8-690f81c410f1', 'charliebank', 'M4N5O6', 'd8348e3d-cf62-48c1-b993-64bd0317228b');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('bdf0ed3c-ec39-4024-8973-6c081523681a', 'john.doeupi', 'A1B2C3', 'bd35683b-34ea-4072-9bcf-a188656a272f');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('63a8f5e0-a6d9-485f-a808-72f3735c3331', 'charliebank', 'M4N5O6', '0c6c3250-05ab-4c08-b96d-4eb1d6fddc57');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('5d7872d3-6213-4456-a2be-6cd46a2135e2', 'charliebank', 'A1B2C3', '211668e0-4df6-4834-98cb-82213174aaee');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('97616d5e-3793-402b-9002-a921117ed706', 'bob123upi', 'D4E5F6', '5520809e-c424-40c0-92d4-9e8cf2c64060');
INSERT INTO "PaymentDetail" ("id", "upiId", "authCode", "paymentId") VALUES ('28a940ca-8585-41b9-bc87-5013cd72253d', 'john.doeupi', 'J1K2L3', '9fd6b6fc-af01-4338-aee4-3debf6e73dba');

INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('0f0e4721-a867-45ee-91ee-719554950faa', '2024-09-21T15:37:14.946Z', 'USD', '09b156ff-5083-4001-88f8-b7519c549dc6', 'a7dfb8f7-cee6-4303-bee2-905bcc2bc8fa');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('ae0dd403-d110-4e32-a564-2edc55cfc9c7', '2024-07-06T03:36:49.547Z', 'JPY', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '5520809e-c424-40c0-92d4-9e8cf2c64060');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('941d65fa-39b2-46bd-a2de-a4b04b188223', '2023-10-23T01:42:15.041Z', 'GBP', '1427252d-64c3-4f0d-a596-373a3f29b56b', 'a7dfb8f7-cee6-4303-bee2-905bcc2bc8fa');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('b055eb8b-a964-4f13-a465-de39f3093f3b', '2024-06-06T18:25:44.434Z', 'EUR', '0bdc46b1-a3cf-4ebf-ba92-8e5acdcda27e', 'c4e73dfb-9b27-4751-8630-415a766a12ec');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('2cf7a398-8872-4264-95aa-0bf3cf303baa', '2025-05-28T03:54:11.704Z', 'JPY', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '9fd6b6fc-af01-4338-aee4-3debf6e73dba');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('76343c88-19ad-47c8-bdb9-459c652f4542', '2024-01-02T07:43:12.884Z', 'EUR', 'b7b833b9-49c3-4ae5-b759-b4684bb70a36', 'bd35683b-34ea-4072-9bcf-a188656a272f');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('f0d8b32b-6df5-4f9f-a301-fb66b0a832d5', '2025-07-12T09:19:23.965Z', 'AUD', 'e1c437e4-a0f6-4328-a854-0b9f4d03b392', '0c6c3250-05ab-4c08-b96d-4eb1d6fddc57');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('4883767d-0133-451c-be14-6b6d3b6c9665', '2024-01-10T09:18:14.552Z', 'AUD', 'ad15020e-8c92-4ebb-9d67-eb7b19f6b47d', '211668e0-4df6-4834-98cb-82213174aaee');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('8a7c4002-864f-4d39-9c92-9b72221eb168', '2025-02-05T09:44:14.994Z', 'AUD', '1427252d-64c3-4f0d-a596-373a3f29b56b', 'c4e73dfb-9b27-4751-8630-415a766a12ec');
INSERT INTO "PaymentHistory" ("id", "date", "currency", "userId", "paymentId") VALUES ('39665899-8dce-4c81-8e6f-57971926d613', '2025-01-11T10:58:03.990Z', 'USD', 'fdc7e869-fd98-499a-8cb6-3eb891457ec4', 'bd35683b-34ea-4072-9bcf-a188656a272f');

INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('e843a167-8502-4e12-84a9-72bcc68c1771', 'GBP', 'CHF', 407);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('342b9a86-1ea8-4059-ba8c-ae6173916b85', 'GBP', 'NZD', 924);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('8d998478-827f-4d30-9be3-afc9e37a55e4', 'USD', 'CAD', 783);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('fd949cdf-9777-4bb2-8ae6-847cad820713', 'GBP', 'CAD', 821);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('bc8d62cf-6664-4053-9dc4-24e1299e47bb', 'AUD', 'INR', 879);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('400f8a3c-3ede-4b8c-8c85-8b31dc67d5a5', 'USD', 'CAD', 920);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('957ad9ce-3fd8-4ede-b889-7fabe93b6cd8', 'USD', 'INR', 71);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('2368a6da-5230-4d10-9e33-97d39bbd1611', 'USD', 'CAD', 368);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('e297a787-718d-4149-bb77-f64730b1c16b', 'EUR', 'CAD', 878);
INSERT INTO "ExchangeRate" ("id", "fromCurrency", "toCurrency", "rate") VALUES ('13b0ca57-52db-4828-9c36-16ee31d06501', 'GBP', 'CNY', 320);

INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('65c89f75-6ea0-475e-bea5-a09b8f51b7ed', 'https://i.imgur.com/YfJQV5z.png?id=281', '0c6c3250-05ab-4c08-b96d-4eb1d6fddc57');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('8911f35e-1772-45a3-90dc-f88545ee188c', 'https://i.imgur.com/YfJQV5z.png?id=283', 'd8348e3d-cf62-48c1-b993-64bd0317228b');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('52f08483-5b73-4dde-a70b-3972f234b64d', 'https://i.imgur.com/YfJQV5z.png?id=285', 'd8348e3d-cf62-48c1-b993-64bd0317228b');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('30f6178a-7627-4b22-805e-651846c2bd13', 'https://i.imgur.com/YfJQV5z.png?id=287', 'bd35683b-34ea-4072-9bcf-a188656a272f');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('0bd07f01-0b97-4db9-81f4-091b717b32ac', 'https://i.imgur.com/YfJQV5z.png?id=289', 'd94f84a2-8603-4fb7-92ad-73f9dea71b6d');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('97862f3a-2171-412e-af07-290695eebd74', 'https://i.imgur.com/YfJQV5z.png?id=291', 'c4e73dfb-9b27-4751-8630-415a766a12ec');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('9ddcd88a-bb3a-4e1f-ad05-f8243047019f', 'https://i.imgur.com/YfJQV5z.png?id=293', '5520809e-c424-40c0-92d4-9e8cf2c64060');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('0279d25c-179f-49f4-b0e5-8cb1fc146454', 'https://i.imgur.com/YfJQV5z.png?id=295', '0c6c3250-05ab-4c08-b96d-4eb1d6fddc57');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('22f0f98e-e6bf-48b3-bf9d-4eb5236cecc0', 'https://i.imgur.com/YfJQV5z.png?id=297', '1a88c3e0-8efe-421e-9238-cbe1ade184f8');
INSERT INTO "Receipt" ("id", "receiptUrl", "paymentId") VALUES ('4c10194a-a91b-4ff9-b567-9d1a0d95c947', 'https://i.imgur.com/YfJQV5z.png?id=299', 'd8348e3d-cf62-48c1-b993-64bd0317228b');

INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('f0d5cced-1e36-4f88-9f59-0e500353e571', 'Cryptocurrency', 'Visa ending in 1234', 'JPY', 'ad15020e-8c92-4ebb-9d67-eb7b19f6b47d');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('e7d431a7-7a82-4de7-920e-9ada5402616a', 'PayPal', 'PayPal account john.doeexample.com', 'CAD', 'fdc7e869-fd98-499a-8cb6-3eb891457ec4');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('2e4550cd-fd85-4ee8-8703-945efbd845b5', 'Bank Transfer', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'GBP', '09b156ff-5083-4001-88f8-b7519c549dc6');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('f869b14c-1c71-4c4d-a97a-bb7a343d8497', 'PayPal', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'EUR', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('119fda95-ffc4-4812-a42f-755d23db1f12', 'Debit Card', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'GBP', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('f14f1a80-6d5b-44db-8ebf-440190b95c46', 'Debit Card', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'GBP', 'd90bf09c-907f-47a6-b522-c81ec84034d4');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('46f6e339-7d3a-4a85-bf93-c0b767b30447', 'Debit Card', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'JPY', 'b7b833b9-49c3-4ae5-b759-b4684bb70a36');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('d0e3014a-cc26-44a1-987f-05f34779b5a5', 'Credit Card', 'PayPal account john.doeexample.com', 'USD', '0bdc46b1-a3cf-4ebf-ba92-8e5acdcda27e');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('dc676051-8af4-4454-b129-9506e9edb07d', 'Credit Card', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'EUR', 'd90bf09c-907f-47a6-b522-c81ec84034d4');
INSERT INTO "PaymentMethod" ("id", "methodType", "details", "defaultCurrency", "userId") VALUES ('13b5a877-8416-4dbc-9998-77760c7d8464', 'Cryptocurrency', 'Bitcoin Wallet 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'JPY', 'd90bf09c-907f-47a6-b522-c81ec84034d4');

INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('a009410c-b661-4a1c-a40f-564f26bff8be', 'The app reserves the right to modify or terminate services without prior notice.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('341f2ec1-02e3-4be2-9eb8-a811cb2d2180', 'By using this app you agree to our terms and conditions including fees and charges that may apply.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('243bb3f3-d5eb-42d1-bc56-797f12f8ab0d', 'Users must ensure the accuracy of payment details before confirming a transaction.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('2ece8ec3-bd5d-48ca-9b1b-e18caf0d21fd', 'Refunds and chargebacks are subject to our refund policy and may take up to 10 business days to process.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('92f6a9bf-e96b-4162-9b1c-2e9bca1f629b', 'The app reserves the right to modify or terminate services without prior notice.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('a95e4e3e-80a4-4726-b798-c0ae8a427b50', 'By using this app you agree to our terms and conditions including fees and charges that may apply.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('5aae483c-6dfb-42b2-9a39-5e8a715397dc', 'Refunds and chargebacks are subject to our refund policy and may take up to 10 business days to process.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('bb27abe7-7b66-4bc6-8fac-ffd3fd614f64', 'Users must ensure the accuracy of payment details before confirming a transaction.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('2d147824-5c62-426b-b59b-1a1b02c6e838', 'All transactions are subject to review and approval by our compliance team.');
INSERT INTO "TermsAndConditions" ("id", "content") VALUES ('9ad257c3-2a31-447a-aa68-b1fbc9b2a42d', 'Refunds and chargebacks are subject to our refund policy and may take up to 10 business days to process.');

INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('9692b8ad-4efd-4bae-8205-cb4237926fbf', 'Unable to process international payment', 'In Progress', 'e7f9592f-2116-4fee-a60e-34ffc93ada54');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('6604c033-9fcf-463f-b683-aa20596529b1', 'Payment gateway timeout', 'Open', 'b7b833b9-49c3-4ae5-b759-b4684bb70a36');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('300e9240-567b-4993-9692-e2ba5b119544', 'Unable to process international payment', 'Closed', '1427252d-64c3-4f0d-a596-373a3f29b56b');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('4719aed5-00a6-4e54-9303-e38ec603005b', 'Account locked after multiple failed attempts', 'Resolved', 'e7f9592f-2116-4fee-a60e-34ffc93ada54');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('5221a3cf-e7d9-4f75-8e32-374f38b8869a', 'Payment gateway timeout', 'Open', '1427252d-64c3-4f0d-a596-373a3f29b56b');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('30298b12-a5ab-4956-ad40-f719df4f779f', 'Payment gateway timeout', 'Open', 'e7f9592f-2116-4fee-a60e-34ffc93ada54');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('fa0b0d0e-7981-478b-89fe-959a85d19033', 'Transaction failed but amount deducted', 'Resolved', 'ad15020e-8c92-4ebb-9d67-eb7b19f6b47d');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('3e63e29a-9f51-4315-967e-f6a997ace837', 'Account locked after multiple failed attempts', 'Closed', 'ad15020e-8c92-4ebb-9d67-eb7b19f6b47d');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('56613671-dbf6-40b3-a4ec-7e7e40d15fb5', 'Account locked after multiple failed attempts', 'Open', 'e7f9592f-2116-4fee-a60e-34ffc93ada54');
INSERT INTO "CustomerSupport" ("id", "issueDescription", "status", "userId") VALUES ('7c6da74a-f246-4964-b770-7fb009da1f18', 'Payment gateway timeout', 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "Faq" ("id", "question", "answer") VALUES ('e6352172-b9ec-4c5f-b74a-67ce4d898b5a', 'Is there a fee for currency conversion', 'Yes there is a small fee for currency conversion which varies depending on the currencies involved.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('44479e41-1d6f-4cde-a2d8-5ba2f1c1e9d4', 'How can I make an international payment', 'Yes there is a small fee for currency conversion which varies depending on the currencies involved.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('2c5dad95-0070-473c-8217-ab399a905793', 'What currencies are supported by the app', 'To make an international payment select the International Payment option and follow the instructions.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('96ab80fe-1ba3-465e-8b62-6fa93bcb8863', 'Is there a fee for currency conversion', 'The app supports over 150 currencies including USD EUR GBP JPY and more.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('17b19a14-934e-49c8-931e-7a4a93221d3f', 'How can I make an international payment', 'Yes there is a small fee for currency conversion which varies depending on the currencies involved.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('ac3c0143-3477-42dd-a740-d2a41d802b02', 'What currencies are supported by the app', 'To make an international payment select the International Payment option and follow the instructions.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('30d2ff1c-2cc4-4106-9d18-7937544323bc', 'Can I cancel a payment after it has been made', 'Payments typically process within 13 business days.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('a5f7b334-ea38-48b7-b7e4-64f3f5f99d2b', 'Can I cancel a payment after it has been made', 'To make an international payment select the International Payment option and follow the instructions.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('3d4f2e62-7e9d-4207-aa14-4edfae7d0c19', 'How long does it take for a payment to process', 'Yes there is a small fee for currency conversion which varies depending on the currencies involved.');
INSERT INTO "Faq" ("id", "question", "answer") VALUES ('5e589eef-224f-465e-8081-ec585600d642', 'How can I make an international payment', 'Payments typically process within 13 business days.');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
