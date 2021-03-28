---
permalink: /borrow/
title: Borrow USD on Ruler
intro: Without risk of collateral liquidation
---

To get a USD loan at Ruler, borrowers deposit collateral, and receive the DAI stablecoin at a loan-to-value ratio specific to the particular collateral asset.

Ruler currently accept BTC, ETH (v1 and v2), COVER, INV and PICKLE as collateral.

Unlike other borrrowing platforms, the user's collateral can not be lost—i.e. liquidated—if the USD price of the collateral drops. 

To provide for this feature, the loan has a fixed term, which is usually about one month. If the user does not repay on time, their loan is considered in default, and they forfeit their collateral.

The interest rate of the loan is market-driven and dynamic, but fixed for the full term at the moment the loan is issued.

**How it works?** — While understanding these details is not required to use the product, here's how Ruler works under-the-hood.

- When you deposit collateral, Ruler creates—i.e. "mints"—two tokens for you: A certain amount of "RC" tokens, and a certain amount of "RR" tokens.
- The RC tokens are sold in an AMM (Automated Market Maker) pool, for DAI, and this DAI is provided to you as your loan.
- The interest rate of your loan is determined by the current demand and supply seen in the AMM at the time your loan is issued.
- Your RR tokens represent your right to repay DAI to the platform, prior to expiry, in order to reclaim your collateral.
- If you do not repay your DAI before expiry, your loan is in default and you lose your collateral.

**Questions from Matt:**

- What are you actually paying back, a specific amount of DAI or a specific amount of RC tokens?
- How can the interest rate be fixed, if you don't know the market situation at the time you repay your loan?
- How is the interest rate determined? If there's equal DAI and RC tokens in the pool, is the interest rate 0%? Can someone provide me with a simple numerical example to see how this works?

Let’s now look at [how to be a lender on Ruler](/lending/) →