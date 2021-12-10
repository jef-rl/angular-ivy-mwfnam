
export const order = {
  accId: 'acct_18u4ELJNxVyqKJUC',
  address: '12 Claremont Gardens Clevedon Bs21 5BE',
  appBrand: 'Gourmet Guide',
  appFee: 89,
  appId: 'dnhJhmtnmOhQFGtbxJV7',
  basketId: '0043A9DACF',
  charge: 48,
  submitted: new Date(),
  created: {
    __datatype__: 'timestamp',
    value: {
      _seconds: 1638815201,
      _nanoseconds: 520000000,
    },
  },
  discount: null,
  discountTotal: null,
  done: false,
  email: 'timacclark@gmail.com',
  form: {
    address1: '12 Claremont Gardens',
    email: 'timacclark@gmail.com',
    firstName: 'Tim Clark',
    postcode: 'Bs21 5BE',
    town: 'Clevedon',
  },
  goodsTotal: null,
  id: '0043A9DACF',
  intentCharge: 48,
  intentId: 'pi_3K3lxqJNxVyqKJUC1xfvt79Y',
  live: true,
  name: 'Tim Clark',
  orderId: 698,
  orderReference: '20211206_1831_0043A9DACF',
  paid: true,
  payment: {
    amount: 4800,
    amount_capturable: 0,
    amount_received: 4800,
    application: 'ca_HWWJHMtaKg8FlK3cXY6GDbjivc1letPo',
    application_fee_amount: 89,
    automatic_payment_methods: null,
    canceled_at: null,
    cancellation_reason: null,
    capture_method: 'automatic',
    charges: {
      data: [
        {
          amount: 4800,
          amount_captured: 4800,
          amount_refunded: 0,
          application: 'ca_HWWJHMtaKg8FlK3cXY6GDbjivc1letPo',
          application_fee: 'fee_1K3lxtJNxVyqKJUCZUKOk02r',
          application_fee_amount: 89,
          balance_transaction: 'txn_3K3lxqJNxVyqKJUC1TCfbpbP',
          billing_details: {
            address: {
              city: null,
              country: null,
              line1: null,
              line2: null,
              postal_code: null,
              state: null,
            },
            email: null,
            name: null,
            phone: null,
          },
          calculated_statement_descriptor: 'GOURMET GUIDE VOUCHERS',
          captured: true,
          created: 1638815464,
          currency: 'gbp',
          customer: null,
          description: 'Gourmet Guide Payment Reference 0043A9DACF',
          destination: null,
          dispute: null,
          disputed: false,
          failure_code: null,
          failure_message: null,
          fraud_details: {},
          id: 'ch_3K3lxqJNxVyqKJUC1pHOnmaI',
          invoice: null,
          livemode: true,
          metadata: {
            accId: 'acct_18u4ELJNxVyqKJUC',
            app: 'lozzuck',
            appBrand: 'Gourmet Guide',
            appFee: '89',
            appId: 'dnhJhmtnmOhQFGtbxJV7',
            basketId: '0043A9DACF',
            charge: '48',
            products: '1',
            shipping: '3',
            total: '48',
          },
          object: 'charge',
          on_behalf_of: null,
          order: null,
          outcome: {
            network_status: 'approved_by_network',
            reason: null,
            risk_level: 'normal',
            seller_message: 'Payment complete.',
            type: 'authorized',
          },
          paid: true,
          payment_intent: 'pi_3K3lxqJNxVyqKJUC1xfvt79Y',
          payment_method: 'pm_1K3lxsJNxVyqKJUCIT2cwQdW',
          payment_method_details: {
            card: {
              brand: 'visa',
              checks: {
                address_line1_check: null,
                address_postal_code_check: null,
                cvc_check: 'pass',
              },
              country: 'GB',
              exp_month: 9,
              exp_year: 2023,
              fingerprint: 'GNDInlcLHhtwFB1j',
              funding: 'debit',
              installments: null,
              last4: '0431',
              network: 'visa',
              three_d_secure: null,
              wallet: null,
            },
            type: 'card',
          },
          receipt_email: null,
          receipt_number: null,
          receipt_url:
            'https://pay.stripe.com/receipts/acct_18u4ELJNxVyqKJUC/ch_3K3lxqJNxVyqKJUC1pHOnmaI/rcpt_KjEQIiuJDjSc47nK5x0WUb1eyUW5mN5',
          refunded: false,
          refunds: {
            data: [],
            has_more: false,
            object: 'list',
            total_count: 0,
            url: '/v1/charges/ch_3K3lxqJNxVyqKJUC1pHOnmaI/refunds',
          },
          review: null,
          shipping: null,
          source: null,
          source_transfer: null,
          statement_descriptor: null,
          statement_descriptor_suffix: null,
          status: 'succeeded',
          transfer_data: null,
          transfer_group: null,
        },
      ],
      has_more: false,
      object: 'list',
      total_count: 1,
      url: '/v1/charges?payment_intent=pi_3K3lxqJNxVyqKJUC1xfvt79Y',
    },
    client_secret:
      'pi_3K3lxqJNxVyqKJUC1xfvt79Y_secret_YA3oFkXCemkhag2THT3CG7GKf',
    confirmation_method: 'automatic',
    created: 1638815462,
    currency: 'gbp',
    customer: null,
    description: 'Gourmet Guide Payment Reference 0043A9DACF',
    id: 'pi_3K3lxqJNxVyqKJUC1xfvt79Y',
    invoice: null,
    last_payment_error: null,
    livemode: true,
    metadata: {
      accId: 'acct_18u4ELJNxVyqKJUC',
      app: 'lozzuck',
      appBrand: 'Gourmet Guide',
      appFee: '89',
      appId: 'dnhJhmtnmOhQFGtbxJV7',
      basketId: '0043A9DACF',
      charge: '48',
      products: '1',
      shipping: '3',
      total: '48',
    },
    next_action: null,
    object: 'payment_intent',
    on_behalf_of: null,
    payment_method: 'pm_1K3lxsJNxVyqKJUCIT2cwQdW',
    payment_method_options: {
      card: {
        installments: null,
        network: null,
        request_three_d_secure: 'automatic',
      },
    },
    payment_method_types: ['card'],
    receipt_email: null,
    review: null,
    setup_future_usage: null,
    shipping: null,
    source: null,
    statement_descriptor: null,
    statement_descriptor_suffix: null,
    status: 'succeeded',
    transfer_data: null,
    transfer_group: null,
  },
  paymentMethod: 'stripe',
  products: [
    {
      extra: 5,
      id: 'gift-voucher-box-KWV08RJ7',
      image:
        'https://firebasestorage.googleapis.com/v0/b/lozzuck.appspot.com/o/uploads%2Fkvrb8vf4.jpg?alt=media&token=62e6fc48-baa5-40ac-a3ec-507118e046c8?alt=media',
      label: 'KWV08RJ7| £40  Voucher & Gift Box',
      metadata: {
        checkPath: 'brand/dnhJhmtnmOhQFGtbxJV7/products/gift-voucher-box',
        description:
          'Gourmet Guide Restaurant Gift Vouchers Box can be delivered immediately or scheduled to arrive with you or your chosen recipient on the date of your choice.All Gourmet Guide Gift Vouchers are valid until 31st December 2022 and can be redeemed at any of the restaurants listed on the website.',
        extra: '5',
        id: 'gift-voucher-box',
        image1:
          'https://firebasestorage.googleapis.com/v0/b/lozzuck.appspot.com/o/uploads%2Fkvrb8vf4.jpg?alt=media&token=62e6fc48-baa5-40ac-a3ec-507118e046c8?alt=media',
        image2: null,
        image3: null,
        image4: null,
        image5: null,
        linkedProductId1: 'maZAyDaBw7cdPLFua6CV',
        linkedProductId10: null,
        linkedProductId2: 'TzhfUk9f0UZ5yPAdAbYl',
        linkedProductId3: 'roar-candle',
        linkedProductId4: 'KbKbMCrCqlxJ1K5clpp3',
        linkedProductId5: 'RMePLQZaSg5chlwNZEvJ',
        linkedProductId6: 'kZvRl3W20E6ZbeWPU3MY',
        linkedProductId7: '',
        linkedProductId8: null,
        linkedProductId9: null,
        linkedProductName1: 'ROAR Glittering Melts',
        linkedProductName10: null,
        linkedProductName2: 'ROAR Wax Melts',
        linkedProductName3: 'ROAR Gift Candle',
        linkedProductName4: 'ROAR Burner & Glittering Melts',
        linkedProductName5: 'ROAR Burner & Wax Melts',
        linkedProductName6: 'ROAR Chocolate Gift Box',
        linkedProductName7: '',
        linkedProductName8: null,
        linkedProductName9: null,
        linkedProductPrice1: '8',
        linkedProductPrice10: null,
        linkedProductPrice2: '8',
        linkedProductPrice3: '14',
        linkedProductPrice4: '22',
        linkedProductPrice5: '22',
        linkedProductPrice6: '12',
        linkedProductPrice7: '',
        linkedProductPrice8: null,
        linkedProductPrice9: null,
        name: ' Voucher & Gift Box',
        order: 40,
        price: '50',
        priceOld: null,
        pricePrompt: 'VOUCHER VALUE OPTIONS',
        pricing: [
          {
            extra: '5',
            price: '20',
            priceLabel: '£20',
          },
          {
            extra: '5',
            price: '30',
            priceLabel: '£30',
          },
          {
            extra: '5',
            price: '40',
            priceLabel: '£40',
          },
          {
            extra: '5',
            price: '50',
            priceLabel: '£50',
          },
          {
            extra: '5',
            price: '60',
            priceLabel: '£60',
          },
          {
            extra: '5',
            price: '70',
            priceLabel: '£70',
          },
          {
            extra: '5',
            price: '80',
            priceLabel: '£80',
          },
          {
            extra: '5',
            price: '90',
            priceLabel: '£90',
          },
          {
            extra: '5',
            price: '100',
            priceLabel: '£100',
          },
          {
            extra: '5',
            price: '120',
            priceLabel: '£120',
          },
          {
            extra: '5',
            price: '125',
            priceLabel: '£125',
          },
          {
            extra: '5',
            price: '150',
            priceLabel: '£150',
          },
          {
            extra: '5',
            price: '175',
            priceLabel: '£175',
          },
          {
            extra: '5',
            price: '200',
            priceLabel: '£200',
          },
          {
            extra: '5',
            price: '225',
            priceLabel: '£225',
          },
          {
            extra: '5',
            price: '250',
            priceLabel: '£250',
          },
          {
            extra: '5',
            price: '275',
            priceLabel: '£275',
          },
          {
            extra: '5',
            price: '300',
            priceLabel: '£300',
          },
          {
            extra: '5',
            price: '325',
            priceLabel: '£325',
          },
          {
            extra: '5',
            price: '350',
            priceLabel: '£350',
          },
          {
            extra: '5',
            price: '375',
            priceLabel: '£375',
          },
          {
            extra: '5',
            price: '400',
            priceLabel: '£400',
          },
          {
            extra: '5',
            price: '425',
            priceLabel: '£425',
          },
          {
            extra: '5',
            price: '450',
            priceLabel: '£450',
          },
          {
            extra: '5',
            price: '475',
            priceLabel: '£475',
          },
          {
            extra: '5',
            price: '500',
            priceLabel: '£500',
          },
        ],
        recipientAddress: 'optional',
        recipientDate: null,
        recipientEmail: null,
        recipientMessage: 'optional',
        recipientName: 'optional',
        route: 'shop/gift-voucher-box',
        shipping: '3',
        soldOut: '',
        stock: '999999999',
        tags: {
          bouquets: false,
          boxes: true,
          'e-vouchers': null,
          extras: null,
          wallets: null,
        },
      },
      price: 40,
      quantity: 1,
      recipientAddress: '',
      recipientDate: '2021-12-06T18:25:18.512Z',
      recipientEmail: '',
      recipientMessage: '',
      recipientName: '',
      recipientPostcode: '',
      recipientSet: 'payee',
      recipientTown: '',
      shipping: '3',
      subtotal: 45,
    },
  ],
  received: 48,
  savedForm: {
    address1: '12 Claremont Gardens',
    email: 'timacclark@gmail.com',
    firstName: 'Tim Clark',
    postcode: 'Bs21 5BE',
    town: 'Clevedon',
  },
  sent: false,
  shipping: 3,
  stop: false,
  total: 48,
  updated: {
    __datatype__: 'timestamp',
    value: {
      _seconds: 1638815466,
      _nanoseconds: 548000000,
    },
  },
};
