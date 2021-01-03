@rest-assured @order-create @webhook
Feature: Webhook Functionalities
  Description :
  it will do bunch of scenarios to assure that webhook is working within 15 secs after event triggered

  Scenario: Shipper delete existing webhook and create new webhook endpoint using requestbin service (uid:2bf37c66-7b5b-4064-ad6b-3740ec21332c)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook ""

  #this scenario using order creation v3 steps
  Scenario: Shipper get notified after Order Created with Staging Status (STAGING) (uid:39bfa50a-358a-454f-8def-0d3a1cadf48a)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Staging"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
      | staging                | true                |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel

    Then Pass order creation response to webhook steps
    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Staging"

  #PICKUP ORDER CREATED - PENDING PICKUP
  Scenario: Shipper get notified after Order Confirmed (PENDING_PICKUP) (uid:08997784-e343-4112-8d53-095b80e2954b)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Pending Pickup"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel

    Then Pass order creation response to webhook steps
    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Pending Pickup"

  #ROUTE CONTAINING RESERVATION WAYPOINT STARTED - VAN ENROUTE TO PICKUP
  @ArchiveRoute
  Scenario: Shipper get notified after Driver is Assigned to pickup order (VAN_ENROUTE_TO_PICKUP) (uid:d444fec5-5c48-4f41-8faa-c0a7c57485f4)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Van en-route to pickup"
    Given Shipper create an V3 order with the following attributes:
      | type                   | Return              |
      | from_name              | James T Kirk        |
      | from_contact           | 91234567            |
      | from_email             | john.doe@gmail.com  |
      | from_address1          | 998 Toa Payoh North |
      | from_address2          | #01-10              |
      | from_locality          | Toa Payoh           |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 318993              |
      | to_name                | Han Solo Exports    |
      | to_contact             | 98765432            |
      | to_email               | jane.doe@gmail.com  |
      | to_address1            | 48 Lengkok Bahru    |
      | to_address2            | Ninja Van HQ        |
      | to_locality            | Bukit Merah         |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 159363              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    Then Operator prepare pickup route and assign the parcel into it
    And Operator start the pickup route

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Van en-route to pickup"

  #DRIVER PICKUP ORDER FROM A RESERVATION SUCCESSFULLY - ENROUTE TO SORTING HUB
  @ArchiveRoute
  Scenario: Shipper get notified after Driver Scan the order (ENROUTE_TO_SORTING_HUB) (uid:c0ba577d-d4b6-4ddf-adbd-511095444070)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "En-route to Sorting Hub"

    When Shipper set its pickup address as described below:
      | name     | Han Solo Exports   |
      | email    | jane.doe@gmail.com |
      | contact  | 91234567           |
      | address1 | 48 Lengkok Bahru   |
      | address2 | Ninja Van HQ       |
      | postcode | 159363             |
      | city     | SG                 |
      | state    | SG                 |
      | country  | SG                 |
    Then Operator create pickup reservation with parameter:
      | timewindowId   | 2                                                                                                                                 |
      | readyDatetime  | {{cur_date}} 07:00:00                                                                                                             |
      | latestDatetime | {{cur_date}} 10:00:00                                                                                                             |
      | approxVolume   | Less than 10 Parcels                                                                                                              |
      | comments       | This pick-up (reservation) is created for webhook testing, please ignore this pick-up (reservation). Created at {{created_date}}. |
    And Operator create route
    Then Assign reservation to route

    Given Shipper create an V3 order with the following attributes and attach created waypoint ID:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
      | from_waypoint_id       | null                |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    When Driver authenticate with username "{driver-username}" and password "{driver-password}"
    Then Driver get all routes and expect found created waypoint to be listed
    And The driver pick up the order

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "En-route to Sorting Hub"

  #GLOBAL INBOUND - ARRIVED AT SORTING HUB EVENT
  Scenario: Shipper get notified after Global Inbound is performed (ARRIVED_AT_SORTING_HUB) (uid:0182cff1-6a20-48c2-a34e-f4bff5a458d3)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Arrived at Sorting Hub"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    # any order inbounded to a hub that is linked to a dp_id the status will be “Arrived at Origin Hub” instead.
    When operator performing global inbound at hub 3

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Arrived at Sorting Hub"

  #VAN INBOUND, START DELIVERY ROUTE - ON VEHICLE FOR DELIVERY
  @ArchiveRoute
  Scenario: Shipper get notified after Van Inbound is performed (ON_VEHICLE_FOR_DELIVERY) (uid:1a6a1fc8-c63c-460e-9159-e3cfd385e253)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "On Vehicle for Delivery"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    When operator performing global inbound at hub 1
    Then Operator prepare delivery route and assign the parcel into it

    When Driver authenticate with username "{driver-username}" and password "{driver-password}"
    And Driver inbound parcel and start route

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "On Vehicle for Delivery"

  #DELIVER PARCEL SUCCESSFULLY - COMPLETED
  @ArchiveRoute
  Scenario: Shipper get notified after Driver Deliver Parcel successfully (COMPLETED) (uid:2c1ea85b-4956-4b24-9bd5-01b37bc8990f)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Completed"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    When operator performing global inbound at hub 1
    Then Operator prepare delivery route and assign the parcel into it

    When Driver authenticate with username "{driver-username}" and password "{driver-password}"
    And Driver inbound parcel and start route
    And Driver deliver parcel successfully

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Completed"

  #FAIL TO DELIVER PARCEL SUCCESSFULLY - PENDING RESCHEDULE
  @ArchiveRoute
  Scenario: Shipper get notified after Driver Fail to Deliver Parcel (PENDING RESCHEDULE)  (uid:eb8afc88-6a36-4157-a393-c34f1b01f518)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Pending Reschedule"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    When operator performing global inbound at hub 1
    Then Operator prepare delivery route and assign the parcel into it

    When Driver authenticate with username "{driver-username}" and password "{driver-password}"
    And Driver inbound parcel and start route
    And Driver failed the parcel delivery

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Pending Reschedule"

  Scenario: Shipper get Notified when Parcel Size Changes upon Global Inbound (PARCEL_SIZE) (uid:fb421252-26c5-4165-8dbd-2474791116c3)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Parcel Size"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    When operator performing global inbound at hub 1 with new size "EXTRALARGE"

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Parcel Size"

  #PARCEL WEIGHT
  Scenario: Shipper get Notified when Parcel Weight Changes upon Global Inbound (PARCEL_WEIGHT)
    Given Shipper get authenticated to create order and access profile
    Then Shipper setup its webhook "Parcel Weight"
    Given Shipper create an V3 order with the following attributes:
      | type                   | NORMAL              |
      | from_name              | Han Solo Exports    |
      | from_contact           | 91234567            |
      | from_email             | jane.doe@gmail.com  |
      | from_address1          | 48 Lengkok Bahru    |
      | from_address2          | Ninja Van HQ        |
      | from_locality          | Bukit Merah         |
      | from_state             | SG                  |
      | from_city              | SG                  |
      | from_country           | SG                  |
      | from_postcode          | 159363              |
      | to_name                | James T Kirk        |
      | to_contact             | 98765432            |
      | to_email               | john.doe@gmail.com  |
      | to_address1            | 998 Toa Payoh North |
      | to_address2            | #01-10              |
      | to_locality            | Toa Payoh           |
      | to_state               | SG                  |
      | to_city                | SG                  |
      | to_country             | SG                  |
      | to_postcode            | 318993              |
      | pickup_date            | TODAY               |
      | pickup_timewindow_id   | 3                   |
      | delivery_date          | NEXT_2_DAYS         |
      | delivery_timewindow_id | 1                   |
      | max_delivery_days      | 1                   |
      | parcel_size            | 0                   |
      | parcel_volume          | 1000                |
      | parcel_weight          | 100                 |
      | pickup_instruction     | on  time please     |
      | delivery_instruction   | ring bell           |
    When Shipper submit this single shipper V3 order
    Then Shipper should receive a V3 http responses with code 200
    And Shipper should able to parse V3 create order response with id for each parcel
    Then Pass order creation response to webhook steps

    When operator performing global inbound at hub 1 with new weight 10

    When Shipper retrieve its webhook endpoint
    Then Shipper should able to find webhook request with status "Parcel Weight"
