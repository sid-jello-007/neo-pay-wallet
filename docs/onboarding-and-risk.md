# Onboarding, KYC/KYB and risk

## Principles
1. **Fast in, gated by limits.** A new user reaches a working wallet quickly; how much they can do depends on their risk level and how far they have verified.
2. **One risk engine, many controls.** The same risk score drives transaction limits, fraud rules and when a case goes to a human.
3. **Every exception has an owner.** Anything automation can't decide goes to a maker / checker queue in the back office.

## Customers (KYC)

```mermaid
flowchart TD
  S[Mobile number + OTP] --> ID[National or resident ID<br/>+ date of birth]
  ID --> OTP2[OTP to the number<br/>linked to the ID]
  OTP2 --> P[Passcode and biometrics]
  P --> PD[Employment, source of income,<br/>income range]
  PD --> SC[Identity check + local and<br/>international sanctions screening]
  SC --> RS[Risk level calculated]
  RS --> L[Limits applied]
  L --> W[Wallet live]
  W -. later .-> UP[Document scan + face match<br/>raises verification and limits]
```

## Merchants (KYB)

```mermaid
flowchart TD
  M1[Mobile + OTP, email verification] --> M2[Company details +<br/>registration certificate]
  M2 --> M3[Senior management and<br/>beneficial owner proof]
  M3 --> M4[Business category,<br/>expected volume and value]
  M4 --> M5[Review and submit]
  M5 --> M6{Compliance review}
  M6 -->|approved| M7[Merchant ID issued,<br/>passcode set, store live]
  M6 -->|exception| M8[Maker / checker queue]
  M8 --> M6
```

Merchants can save and resume their application and track its status, because KYB documents are rarely to hand in one sitting.

## Controls driven by risk

| Control | Set by | Example |
|---|---|---|
| User limits | Risk level | Lower daily and monthly limits until verification is complete |
| Transaction limits | Operations | Per transaction caps by payment type |
| Merchant category limits | Compliance | Daily and monthly in and out limits by merchant category |
| Fraud rules | Compliance | Rule based cases, geo location checks |
| Account status | Operations | Lock when an ID expires, unlock when it is updated |
