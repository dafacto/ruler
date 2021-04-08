---
number: 2
title: Borrow USD on Ruler
intro: Without risk of collateral liquidation
---

To get a loan at Ruler, borrowers **deposit collateral and receive DAI stablecoins** in an amount corresponding to the collateral asset's particular loan-to-value ratio. Ruler accepts a wide variety of collateral, from mainstream assets like ETH and WBTC, to newcomers like INV, PICKLE and DEFI5.

Unlike other borrrowing platforms, the user's collateral **can not be liquidated** if the USD price of the collateral drops.

Loans have a **fixed duration term**, which is usually about one month. If the user does not repay on time, their loan is considered in default, and they forfeit their collateral.

The **interest rate of the loan is market-driven** and dynamic, but fixed for the full term at the moment the loan is issued.

### How to get a loan

Following is the nitty-gritty of how the Ruler borrowing and repayment mechanisms work:

1. **Deposit collateral** — When you deposit collateral, Ruler creates (mints) equal amounts of two tokens for you, "RC" and "RR" tokens. The RR token represents your collateral, and the RC token represents your debt. As an example, say you deposited $200 worth of WBTC. Ruler may mint 100 RC and RR tokens for you, in which case the 100 RC tokens represent $100 of debt, based on a 2-to-1 collateral ratio for WBTC.
2. **Receive DAI** — Ruler then automatically "sells" your RC tokens into a "liquidity pool" for DAI on your behalf, and provides this DAI to your wallet. The current RC-DAI "price" at that moment determines your "interest rate", and the amount of interest you'll pay. For example, if the price of RC tokens happens to be $0.98, your 100 RC tokens will purchase 98 DAI. This loss of 2 DAI, is your total "interest" (since your debt is 100 DAI). On a one-month laon, that works out to an annual interest rate about 24%. The current rate is always displayed on the Ruler website.

This may seem complicated, since we've described the mechanics, but in this simple example, you've effectively deposited $200 worth of WBTC, received a 100 DAI loan, on which you owe (and have pre-paid) a total of 2 DAI in interest, netting 98 DAI in your wallet for your usage.

### How to repay your loan

Prior to term expiry, you'll need to repay your loan. There are two ways to do that:

1. **Pay with DAI** — Continuing with the above example, before loan expiry, you would return to the Ruler website and "pair" your 100 RR tokens with 100 DAI. Upon deposit of those two tokens, you would receive back your originally deposited WBTC.
2. **Pay with RC tokens** — Ruler will actually allow your loan to be settled with the original amount of 100 RC tokens. When the time comes to repay your loan, it might be advantageous for you to buy RC tokens, and redeem with those, as opposed to redeeming with DAI! For example, say RC tokens are still selling for $0.98. In this case, you could buy 100 RC tokens for 98 DAI, and then "pair" the 100 RC and RR tokens to settle your loan. to "buy" RC tokens using DAI, you can use the "Lend" feature of the website—confusing, yes, but in Ruler "lending" is technically buying RC tokens with DAI!

As expiration date approaches, and all loan holders begin repaying their loans, the market price of RC tokens should tend towards 1 DAI, and so the above to options would _generally_ be equivalent.

### Default and loss of collateral

If for any reason you do not repay your debt on time, the loan will be considered in default, and the platform will keep your collateral. Since that mechanism happens at the protocol level, there is no appeal process. It's therefore important to keep an eye on that term date!

Let’s now look at [how to be a lender on Ruler](/lending/) →
