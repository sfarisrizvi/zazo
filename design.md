# Zazo — UI, Brand & Design Guide

> A practical guide for recreating and extending the existing Zazo design.
>
> This guide distinguishes measured design values from inferred patterns and implementation recommendations. It is not a newly approved brand standard.

---

## 1. Overview

### Scope

This guide is based on:

- Both desktop website compositions on the Website Extras page.
- The neon Zazo branding board.
- The reusable mobile navigation component set.
- Representative mobile home, onboarding, error, and dialog screens.

It is not an exhaustive specification of every account type or archived design.

### Evidence labels

- **Observed:** Present in the inspected design.
- **Derived:** A reusable rule inferred from repeated patterns.
- **Recommended:** Guidance for states, behavior, or responsive layouts not fully specified by the design.

Measurements are Figma pixels at the original frame size. Fixed source-frame heights should not become fixed production-page heights.

### Design at a glance

| Attribute | Direction |
|---|---|
| Brand | Zazo |
| Product category | Cross-border payments and local spending |
| Core message | “Get paid in USD. Spend in PKR.” |
| Main conversion | “Join the Waitlist” |
| Design register | Minimal, confident fintech with luminous mint accents |
| Primary typeface | Helvetica Now Display |
| Primary accent | `#6CFF94` |
| Main foreground | `#020202` |
| Main surfaces | White, soft green-gray, and near-black |
| Shape language | Rounded cards, pill buttons, circular controls |
| Signature visuals | Dotted green globe, currency badges, floating payment receipts, phone UI, mint glows |
| Layout character | Oversized compact headings, generous whitespace, asymmetric bento grids, alternating light/dark chapters |

---

## 2. Brand Foundation

### 2.1 Positioning

Zazo presents international receiving, currency conversion, local spending, and rewards as one connected experience.

The product story is:

1. Receive international money.
2. See the conversion rate.
3. Convert to local currency.
4. Spend locally.
5. Earn rewards.

The visual design emphasizes simplicity and transparency rather than institutional heaviness.

### 2.2 Audiences

The website identifies:

- Freelancers.
- Businesses.
- People receiving remittances.
- Local merchants.
- Local users.
- Enterprise users.

Enterprise/programmatic availability is described as coming soon.

### 2.3 Brand personality

**Derived principles:**

1. **Clear**
   - Plain-language headings.
   - Strong hierarchy.
   - Little jargon.

2. **Optimistic**
   - Bright mint communicates action, rewards, and progress.

3. **Controlled**
   - Neutral surfaces dominate.
   - Decoration remains selective.
   - Rounded geometry stays consistent.

4. **Connected**
   - Globes, currency pills, arrows, and transaction flows explain money movement.

5. **Approachable**
   - Human avatars.
   - Familiar local-payment examples.
   - Conversational support.

### 2.4 What the design should not become

Avoid:

- A dense bank portal.
- A trading terminal.
- A rainbow-colored crypto dashboard.
- A stock-photo-led financial website.
- A luxury editorial brand with decorative typography.
- An interface where every element glows.

The identity comes from bold utility, neutral space, and selective mint emphasis.

---

## 3. Brand Voice and Content

### 3.1 Naming

- Use **Zazo** in ordinary prose.
- The wordmark often uses uppercase **ZAZO**.
- The branding board includes **zazo.com**.
- Website purpose copy credits **Yato Inc.**

### 3.2 Voice

The tone is:

- Direct.
- Benefit-led.
- Reassuring.
- Conversational.
- Transparent.

### 3.3 Heading patterns

Observed examples include:

- “Get paid in USD. Spend in PKR.”
- “Get paid globally.”
- “Spend via QR.”
- “Earn as you go.”
- “See the best rate before you convert.”
- “Questions, answered.”
- “Be first to get Zazo.”

### 3.4 Action labels

Prefer specific actions:

- “Join the Waitlist”
- “Send code”
- “Verify and continue”
- “Change number”
- “See all”

Avoid vague labels such as “Submit” when a clearer action is available.

### 3.5 Supporting copy

Explain the next step:

> We’ll text you a code to verify it.

Explain errors with recovery information:

> That code isn’t right. 2 attempts left.

Use sentence case throughout the interface. The uppercase logo does not imply uppercase UI labels.

### 3.6 Content restrictions

The inspected material is prelaunch design content, not independent evidence of live product capabilities.

Important issues to resolve before publication:

- Availability copy says USD and PKR now; EUR, GBP, and AED soon.
- Some illustrations display USDC and USDT. Their presence does not confirm launch support.
- “Available now” messaging appears alongside waitlist messaging.
- Pricing includes an unresolved `[X]%` placeholder.
- Competitor comparison content includes `[date]`.
- Rates, balances, rewards, and transaction values are illustrative.
- Claims about financial partners, fund protection, encryption, and AML/CFT need appropriate approval.
- “Best rate,” “free,” and “no hidden markup” must match actual approved product terms.

---

## 4. Logo and Identity

### 4.1 Logo structure

The identity uses:

- A distinctive geometric, interlocking/angular symbol.
- A ZAZO wordmark.
- A standalone symbol for the app icon.

### 4.2 Observed logo treatments

- Black symbol and wordmark on pale mint.
- Mint symbol with white wordmark on black.
- Black symbol on a vivid mint rounded-square app icon.

### 4.3 Observed placement examples

| Placement | Approximate dimensions |
|---|---:|
| Website navigation logo group | 109 × 41 px |
| Separate centered desktop logo | 137 × 51 px |
| Waitlist app-icon tile | 84 × 84 px |
| Waitlist app-icon corner radius | 24 px |

These are placement examples, not approved minimum-size standards.

### 4.4 Logo typography distinction

The branding board labels the general typeface as Helvetica Now Display, while its wordmark text layers use Aeonik Bold.

Website text-based logo treatments use Helvetica Now Display Bold.

The board also contains a Host Grotesk specimen and a small DM Sans label. Those do not establish a multi-family UI system.

**Recommendation:** use an approved vector lockup rather than recreating the logo with ordinary text.

### 4.5 Logo rules

- Preserve original proportions.
- Preserve the symbol’s internal geometry.
- Do not stretch or redraw the mark.
- Do not add unapproved gradients.
- Use the reversed lockup on dark surfaces.
- Use the black mark on mint.
- Preserve authentic partner and currency-logo colors.

Clear-space and minimum-size rules were not established by the inspected board.

A provisional clear-space rule could use half the symbol height, but this requires brand approval.

---

## 5. Color System

All hex values in this section were observed.

Semantic names are proposed documentation labels, not existing approved token names.

### 5.1 Core palette

| Proposed token | Value | Role |
|---|---|---|
| `brand.mint` | `#6CFF94` | Primary actions, selection, reward emphasis, app icon |
| `ink.primary` | `#020202` | Headings, body text, mint-button labels |
| `ink.black` | `#000000` | Artwork, selected icons, black details |
| `surface.white` | `#FFFFFF` | Main canvas and inner cards |
| `surface.app` | `#FAFAFA` | Off-white mobile backdrop |
| `surface.soft` | `#F4F6F5` | Large bento panels and pale surfaces |
| `surface.soft-green` | `#F0F5F1` | Quiet green-tinted surface |
| `surface.mint` | `#E2FFEA` | Reward and success backgrounds |
| `surface.mint-strong` | `#D6FFE1` | Stronger mint tint |
| `surface.wallet` | `#DCE3E2` | Native wallet-card gray |
| `text.secondary` | `#4A4F4E` | Supporting copy |
| `text.strong-secondary` | `#3A3F3E` | Higher-emphasis secondary copy |
| `text.muted` | `#6A706F` | Captions and supporting details |
| `text.app-muted` | `#6B6F76` | Native mobile metadata |
| `text.on-dark-muted` | `#9AA09F` | Supporting text on dark surfaces |
| `text.success` | `#0B7A33` | Readable green text on light surfaces |
| `green.deep` | `#1B9C3E` | Illustration and atmospheric accents |
| `border.light` | `#E3E8E7` | Subtle neutral separation |
| `surface.dark` | `#111313` | Waitlist form surface |
| `surface.dark-green` | `#111413` | Comparison-column highlight |

### 5.2 Additional observed colors

These are secondary, illustration, or embedded-app colors. They should not become competing website accents.

| Group | Values |
|---|---|
| Pale neutrals | `#EBF2F1`, `#EBEEED`, `#EEF1F0`, `#F7F9F8`, `#F1F4F3`, `#E9EEED` |
| Mid neutrals | `#C9D1D0`, `#939393`, `#494D54` |
| Dark neutrals | `#1D1E24`, `#121212`, `#141414`, `#1C2027` |
| Additional greens | `#51A969`, `#2BC45A`, `#3BC90C` |
| Orange/coral | `#FFA743`, `#FA5939` |
| Currency/artwork colors | `#2775CA`, `#53AE94`, `#3E518C`, `#26408D`, `#0D308C` |

`#FA5939` is observed in native error and destructive UI.

### 5.3 Transparency

| Treatment | Observed value |
|---|---|
| Glass navigation | White at 30% |
| Dark input fill | White at 5% |
| Dark input border | White at 10% |
| Dark form border | White at 8% |
| Comparison dividers | White at 8% |
| Comparison highlight outline | Mint at 35% |
| Other mint overlays | 14%, 25%, 32%, 35% |
| Inactive native tab labels | `#020202` at 40% |

Transparency depends on the underlying surface. Do not replace transparent treatments with flat colors without checking their composited appearance.

### 5.4 Color rules

- Let neutral surfaces dominate.
- Use mint for action, selection, rewards, or a focal visual.
- Use near-black text on mint buttons.
- Do not use white button labels on mint.
- Use dark gray or near-black for long text on white.
- Use darker green for readable success text on pale mint.
- Do not rely on color alone for status.
- Preserve text labels, signs, icons, and selection marks.

---

## 6. Typography

### 6.1 Primary family

**Helvetica Now Display**

Observed weights:

- Regular.
- Medium.
- Bold.

### 6.2 Weight roles

| Weight | Typical use |
|---|---|
| Regular | Body copy, descriptions, explanatory text |
| Medium | Controls, navigation, labels, many mobile titles |
| Bold | Website headings, balances, major values |

### 6.3 Recommended fallback

```css
font-family:
  "Helvetica Now Display",
  "Helvetica Neue",
  Helvetica,
  Arial,
  sans-serif;
```

Use appropriately licensed font files.

Fallback fonts will change text widths, line breaks, and vertical metrics. Avoid synthetic bold.

### 6.4 Desktop website scale

| Role | Size | Weight | Line height | Tracking |
|---|---:|---|---:|---:|
| Main hero | 88 px | Bold | 98% | −3.5% |
| Waitlist display | 96 px | Bold | 96% | −4.5% |
| Large feature/comparison title | 72 px | Bold | 98–100% | −3.5% |
| Standard section title | 64 px | Bold | 100% | −3% |
| Product-story title | 60 px | Bold | 100% | −3.5% |
| Purpose statement | 52 px | Medium/Bold | 116% | −2.5% |
| Footer slogan | 48 px | Bold | 102% | −2.5% |
| Major card title | 28–30 px | Bold | Often auto | Usually −2% |
| Smaller card title | 24 px | Medium | Auto | −1% |
| Large supporting body | 20 px | Regular | 150% | 0 |
| Card description | 17 px | Regular | 145% | 0 |
| Hero CTA | 18 px | Medium | Auto | 0 |
| Navigation | 16 px | Medium | Auto | 0 |
| Eyebrow/label | 13–14 px | Medium | Usually auto | 0 |
| Fine print | 12–13 px | Regular | Auto or 150% | 0 |

Additional display treatments:

- A 120 px Bold “Free” appears in pricing.
- Many 68 px entries belong to calculator digits, not section headings.

### 6.5 Tracking conversion

For implementation:

| Figma tracking | CSS equivalent |
|---|---|
| −1% | `-0.01em` |
| −2% | `-0.02em` |
| −2.5% | `-0.025em` |
| −3% | `-0.03em` |
| −3.5% | `-0.035em` |
| −4.5% | `-0.045em` |

### 6.6 Native mobile scale

Measured from full-size 430 × 932 screens.

| Role | Size / weight | Line height |
|---|---|---|
| Main balance | 40 px Bold | 100% |
| Onboarding title | 26 px Medium | 135% |
| Profile name | 26 px Medium | 130% |
| Wallet amount | 22 px Medium | 120% |
| Section/header title | 20 px Medium | 130% |
| Supporting body | 18 px Regular | 135% |
| Row primary label | 18 px Medium | Often 100–130% |
| Form/control label | 16 px Medium | 130–135% |
| Transaction amount | 16 px Bold | 100% |
| Balance caption | 15 px Regular | 110% |
| Wallet metadata | 14 px Medium | 140% |
| Inspected home tab label | 12 px Medium | 120% |

The standalone navigation component uses 14 px Medium labels, while the inspected home uses 12 px labels. Choose one intentional version.

### 6.7 Scaled mockup warning

Fractional text sizes such as:

- 8.16 px.
- 9.92 px.
- 10.88 px.
- 11.16 px.
- 12.4 px.
- 16.12 px.

often belong to scaled phone illustrations.

They are not recommended production text sizes.

### 6.8 Typesetting rules

- Keep marketing headlines short and deliberate.
- Use compact heading line heights.
- Reserve negative tracking for display text.
- Do not apply tight display tracking to inputs or paragraphs.
- Keep currency symbols/codes attached meaningfully to amounts.
- Use tabular numerals for changing financial values if supported.
- Allow text containers to grow under localization.
- Do not treat Figma “Auto” line height as an exact CSS value.

---

## 7. Layout and Spacing

### 7.1 Desktop foundation

| Property | Observed value |
|---|---:|
| Desktop source width | 1440 px |
| Standard main content width | 1280 px |
| Standard horizontal page padding | 80 px |
| Navigation pill width | 1120 px |
| Navigation pill height | 68 px |
| Navigation top offset | 20 px |
| Hero column gap | 64 px |
| Common split-layout gap | 80 px |
| Bento gaps | 24 px |
| Common section header/content gap | 64 px |
| Typical section vertical padding | 90–160 px |
| Frequently used section padding | 140 px |

### 7.2 Hero

In the globe variation:

- Copy column: 596 px.
- Artwork column: 620 px.
- Gap: 64 px.
- Combined content width: 1280 px.

The hero section inherits its white backdrop from its parent. Do not interpret a transparent section export as a black hero background.

### 7.3 Bento grid

Observed overall grid:

- Width: 1280 px.
- Height: 944 px.
- Row gap: 24 px.
- Column gap: 24 px.
- Card height: 460 px.
- Card radius: 32 px.
- Card background: `#F4F6F5`.

```text
Row 1:
[ Get paid globally — 768 × 460 ] 24 [ Best rate — 488 × 460 ]

24 px row gap

Row 2:
[ QR spending — 488 × 460 ] 24 [ Rewards — 768 × 460 ]
```

### 7.4 Native mobile layout

| Property | Observed value |
|---|---:|
| Representative screen | 430 × 932 px |
| Common content width | 390 px |
| Side insets | 20 px |
| Main onboarding group gap | 24 px |
| Heading-to-body gap | 8 px |
| Phone input height | 56 px |
| Phone input radius | 16 px |
| Phone input horizontal padding | 16 px |
| Primary onboarding button | 390 × 53 px |
| Wallet-card radius | 16 px |
| Wallet-card padding | 14 px |
| Wallet-card internal gap | 6 px |
| Profile row vertical padding | About 18 px |
| Profile row horizontal padding | 20 px |
| Profile icon/text gap | 12 px |

Use actual device safe areas in production rather than reproducing screenshot status bars and home indicators.

### 7.5 Working spacing vocabulary

Derived reusable values:

```text
4, 8, 12, 16, 20, 24, 28, 32,
40, 48, 56, 64, 80, 96, 120, 140, 160
```

This is not a pure 8-point system. Values such as 14 and 18 px appear as optical adjustments.

### 7.6 Corner-radius hierarchy

| Radius | Typical role |
|---:|---|
| 16 px | Inputs, mobile wallet/menu cards, choice chips |
| 20–24 px | Inner panels, FAQ items, smaller surfaces |
| 28 px | Support widget, comparison highlight |
| 32 px | Large bento cards |
| 36 px | Desktop waitlist form |
| Fully rounded | Buttons, pills, navigation shell |

Do not turn extreme or fractional illustration radii into global tokens.

---

## 8. Website Components

### 8.1 Glass navigation

Observed specification:

- 1120 × 68 px.
- 100 px corner radius.
- White at 30% fill.
- Glass effect.
- Soft shadow.
- Padding: 8 px top/right/bottom, 28 px left.
- Link text: 16 px Medium.
- Link gap: 44 px.

Navigation CTA:

- 159 × 52 px.
- Mint fill.
- Near-black text.
- 14 px vertical padding.
- 24 px horizontal padding.
- Fully rounded.

Choose one consistent logo/navigation arrangement. The inspected compositions include alternatives.

Sticky behavior was not established by the inspection.

### 8.2 Primary button

Observed hero button:

- 173 × 54 px.
- `#6CFF94` background.
- `#020202` label.
- 18 px Medium.
- 100 px corner radius.
- 14 px vertical padding.
- 24 px horizontal padding.

Use content-driven width when labels change or are translated.

### 8.3 Secondary actions

Hero secondary action:

- Transparent background.
- 18 px Medium.
- Right-arrow icon.
- Lower visual emphasis than the primary CTA.

FAQ contact action:

- Outlined pill.
- Approximately 60 px high.
- 10 px icon gap.
- 24–28 px horizontal padding.

### 8.4 Eyebrows and status pills

Typical structure:

- Compact rounded container.
- Small label.
- Status dot or check.
- Subtle neutral surface.

Examples include live-rate and currency-availability context.

Do not rely on glow alone to convey status.

### 8.5 Transaction/receipt card

Recurring structure:

1. White rounded surface.
2. Soft shadow.
3. Small circular status/action icon.
4. Main label with muted subtitle.
5. Right-aligned amount.

Use green selectively for rewards or positive amounts.

These are explanatory miniatures, not full dashboards.

### 8.6 Rate calculator

Observed visual language:

- Near-black chapter.
- Large centered white headline.
- Dark elevated calculator panel.
- Large send and receive values.
- USD and PKR pills.
- Circular mint swap control.
- Thin divider.
- Full-width mint CTA.
- Floating assurance pills.
- Restrained glowing green curve.

Recommended states to define:

- Empty input.
- Editing.
- Loading quote.
- Valid quote.
- Stale quote.
- Unavailable quote.
- Validation error.
- Network failure.

Show the quote timestamp/source where appropriate.

### 8.7 Comparison table

Observed dimensions:

| Element | Value |
|---|---:|
| Total table width | 1280 px |
| Feature-label column | 600 px |
| Comparison columns | 4 × 170 px |
| Header height | 104 px |
| Data row height | 76 px |
| Highlight radius | 28 px |

Zazo column:

- Dark-green surface.
- Mint 35% outline.
- Subtle emphasis without a fully bright-green column.

Dividers:

- White at 8%.

Do not publish unresolved dates or unverified competitor claims.

### 8.8 FAQ

Observed layout:

- Left column: 460 px.
- Gap: 80 px.
- Accordion: 740 px.

Left content:

- Large headline.
- Support-chat illustration.
- Outlined contact CTA.

Accordion items:

- White background.
- 24 px corner radius.
- 24 px top/right/bottom padding.
- 28 px left padding.
- 24 px gap between items.
- Closed example: 84 px high.
- Open example: 148 px high.

Controls:

- Closed: pale circular plus.
- Open: mint circular minus.

Let actual answer height follow content.

### 8.9 Support widget

Observed:

- White surface.
- 28 px corner radius.
- 20 px padding.
- 12 px internal gap.
- Small branded avatar/status.
- Alternating message bubbles.

Use as a focused reassurance element rather than decorative clutter.

### 8.10 Waitlist form

Outer panel:

| Property | Value |
|---|---:|
| Width | 580 px |
| Source height | 725 px |
| Background | `#111313` |
| Radius | 36 px |
| Border | White at 8% |
| Top/side padding | 36 px |
| Bottom padding | 32 px |
| Vertical gap | 18 px |

Fields:

- Name.
- Email.
- Optional phone.

Input specification:

| Property | Value |
|---|---:|
| Width | 506 px |
| Height | 60 px |
| Radius | 16 px |
| Fill | White at 5% |
| Border | White at 10% |
| Vertical padding | 17 px |
| Horizontal padding | 18 px |
| Input text | 16 px |
| Label text | 14 px |

Audience choices:

- Two columns.
- Three rows.
- Six options.
- Selected sample: 247 × 50 px.
- Radius: 16 px.
- Padding: 14 px.
- Label: 15 px.
- Selected fill: mint.
- Selected text: near-black.

Recommended semantics:

- Use a single-choice radio group.
- Keep visible field labels.
- Clearly identify optional phone entry.
- Provide validation and submission feedback.
- Define success, duplicate-registration, offline, and server-error states.

### 8.11 Footer

Observed:

- Dark continuation of the final chapter.
- Fine divider rules.
- Large brand statement.
- Navigation/legal groupings.
- Lower legal line.

The desktop source footer is approximately 476 px high. Production height should be content-driven.

---

## 9. Native Mobile UI

### 9.1 Overall character

The app is lighter and more task-focused than the marketing website.

Common patterns:

- Off-white background.
- Strong balance hierarchy.
- Compact quick actions.
- Reward banner.
- Date-grouped transactions.
- Floating bottom navigation.
- Minimal onboarding screens.

### 9.2 Home hierarchy

Typical order:

1. Status/safe-area region.
2. Avatar and greeting/name.
3. Main balance.
4. Send/Receive/Scan actions.
5. Reward or offer banner.
6. Recent transactions.
7. Bottom navigation.

Not every extracted wallet layer is necessarily visible in the initial viewport.

### 9.3 Quick actions

- Circular icon surfaces.
- Short label underneath.
- Leading action in mint.
- Supporting actions in pale green-gray.

Provide comfortable touch targets even if the visible icon circle is small.

### 9.4 Transaction rows

Structure:

- Avatar or merchant icon.
- Primary name.
- Muted transaction status.
- Right-aligned signed amount.
- Group date above related rows.

Observed inconsistency:

- Some incoming values are dark.
- Others are green.
- Some outgoing values are dark.
- Others are coral.

Define consistent production semantics instead of inheriting every color variation.

### 9.5 Bottom navigation

Two versions are present.

Reusable component set:

- Home.
- Payments.
- Scanner.
- Activity.
- Profile.

Inspected home screen:

- Home.
- History.
- Central scan action.
- Discounts.
- Profile.

Component-set variants are 430 × 84 px.

Select one product-approved taxonomy.

Preserve:

- Clear active state.
- Subdued inactive state.
- Distinctive mint central scan action where that version is used.

### 9.6 Onboarding

Structure:

- Back action.
- Conversational title.
- Short explanatory body.
- One principal input group.
- Generous empty space.
- Bottom primary CTA.

Phone input:

- Separate country prefix.
- Main number field.
- Helper text below.

### 9.7 OTP

Observed:

- Six separate digit boxes.
- Rounded corners.
- Coral error outline.
- Error symbol and explanation.
- Attempts remaining.
- Resend countdown.
- “Change number” recovery action.

Recommended additions:

- Paste support.
- Platform autofill.
- Clear keyboard behavior.
- Expired-code state.
- Submitting state.
- Lockout state.
- Accessible combined labeling.

### 9.8 Dialogs

Logout confirmation uses:

- Dimmed/blurred backdrop.
- Rounded white dialog.
- Short title.
- Close control.
- Centered icon.
- Explanatory text.
- Neutral cancel action.
- Coral destructive action.

Recommended requirements:

- Accessible title and description.
- Focus containment.
- Clear dismissal behavior.
- Restored focus after closing.
- Safe-area-aware positioning.
- Sufficient destructive-button contrast.

---

## 10. Shadows, Glass, and Glow

### 10.1 Observed effects

| Treatment | Value/pattern |
|---|---|
| Navigation shadow | `0 4px 24px rgba(0,0,0,0.10)` |
| Small-card elevation example | `0 8px 28px rgba(0,0,0,0.06)` |
| Other soft elevations | About 28–50 px blur, 5–12% opacity |
| Background blur | 20 px in several treatments |
| Focused mint glow | About 8–18 px blur |
| Wider mint halo | About 40 px |
| Atmospheric blur | About 70–160 px |

### 10.2 Figma glass example

Observed parameters:

- Radius: 66.
- Refraction: 0.8.
- Depth: 18.
- Light angle: −45°.
- Light intensity: 0.8.
- Dispersion: approximately 0.38.
- Splay: approximately 0.03.

These are not direct CSS equivalents.

Recommended web approximation:

- Translucent fill.
- Backdrop blur.
- Subtle border/highlight.
- Soft shadow.

Tune against the actual background.

### 10.3 Effect rules

- Use elevation to separate nested surfaces.
- Keep shadows soft and low-opacity.
- Reserve glow for brand focal points.
- Avoid glowing paragraphs or every card.
- Do not use blur as a substitute for readable contrast.
- Keep functional controls distinguishable without decorative effects.

---

## 11. Illustration and Imagery

### 11.1 Signature vocabulary

Observed motifs:

- Dotted luminous globe.
- Green atmospheric aura.
- Currency-code badges with country flags.
- Floating payment receipts.
- Phone UI demonstrations.
- Ascending reward bars.
- Security layers around a lock.
- Feature-orbit compositions.
- Human avatars.
- Product-in-hand imagery.
- Oversized subdued brand-symbol watermark.

### 11.2 Composition rules

- Explain one feature per illustration.
- Keep whitespace around the focal element.
- Put the strongest mint at the active point.
- Use authentic partner and currency marks.
- Keep photography secondary to product UI.
- Use diagrams and receipts to explain behavior.
- Avoid generic financial clip art.
- Preserve original asset quality where fidelity matters.

### 11.3 Charts

Observed reward-chart treatment:

- Rounded bars.
- Neutral inactive bars.
- One bright mint emphasis bar.
- Minimal labeling.
- Strong visual simplicity.

For real data:

- Provide accurate axes/context where needed.
- Do not imply unsupported trends.
- Do not make critical differences depend only on color.

### 11.4 QR codes

A visual QR in a mockup may be decorative.

For production:

- Use a genuine functional QR.
- Provide equivalent copy/share/payment actions.
- Do not generate random QR-like patterns as functional payment UI.

---

## 12. Website Information Architecture

Both desktop roots are complete landing-page compositions, not just heroes.

Approximate source heights:

- 15,993 px.
- 17,103 px.

### 12.1 Observed chapters

1. Navigation and hero.
2. Signup/receiving/spending flow.
3. Cross-border feature bento.
4. Product stories:
   - Receive globally.
   - Convert transparently.
   - Spend and earn.
5. Dark rate calculator.
6. Audiences and payment-source context.
7. Persona story.
8. Rate and rewards.
9. Dark comparison.
10. Feature-orbit recap.
11. Pricing preview.
12. Security.
13. FAQ and support.
14. About/purpose.
15. Dark waitlist and footer.

### 12.2 Source inconsistencies

The second composition introduces product stories early and contains another repeated set later in its layer structure.

Some fixed-height or absolute-positioned containers contain children extending beyond their nominal bounds.

Do not:

- Duplicate story chapters automatically.
- Treat every extracted layer as part of the final editorial sequence.
- Convert fixed frame heights directly into production section heights.
- Allow raw source bounds to clip content.

### 12.3 Recommended coherent sequence

```text
Hero
→ How it works
→ Feature overview
→ Product stories
→ Rate calculator
→ Audiences/personas
→ Rewards
→ Comparison
→ Supporting features
→ Pricing
→ Security
→ FAQ
→ About
→ Waitlist
→ Footer
```

This is a recommended reconstruction sequence, not confirmation that one source version is approved.

---

## 13. Responsive Guidance

The inspected website reference is desktop.

Native app screens are not a mobile-web specification.

The following values are recommended starting points.

| Concern | Large screens | Medium screens | Small screens |
|---|---|---|---|
| Container | Max 1280 px | Fluid, 32–40 px insets | 20–24 px insets |
| Hero | Two columns | Rebalance or stack | Copy then artwork |
| Hero heading | 88 px reference | 60–72 px | 40–48 px |
| Section heading | 60–72 px | 44–56 px | 32–40 px |
| Body | 17–20 px | 17–20 px | 16–18 px |
| Section padding | 120–160 px typical | 80–100 px | 56–80 px |
| Bento | Asymmetric columns | Equalize if needed | Single column |
| FAQ/security | Two columns | Stack when cramped | Single column |
| Waitlist | Side-by-side | Stack as needed | Full width |
| Comparison | Full table | Scroll if necessary | Accessible scroll or deliberate feature cards |

### Responsive rules

- Choose breakpoints from content fit.
- Do not simply shrink the desktop page.
- Preserve readable text.
- Let cards grow with content.
- Reflow forms before they become cramped.
- Crop or reposition decorative artwork intentionally.
- Avoid fixed viewport heights for long content.
- Preserve comfortable touch targets.
- Test long labels and localization.

---

## 14. Interaction and State Guide

The inspected design provides visual examples, not a complete behavior specification.

### 14.1 Button states to define

- Default.
- Hover.
- Focus-visible.
- Pressed.
- Disabled.
- Loading.

### 14.2 Input states to define

- Empty.
- Focused.
- Filled.
- Invalid.
- Disabled.
- Autofilled.

### 14.3 Other state requirements

| Component | Additional specification needed |
|---|---|
| Audience choices | Keyboard interaction and selected-state semantics |
| FAQ | Disclosure behavior and expanded-state announcement |
| Calculator | Loading, stale rate, error, unavailable quote |
| OTP | Paste/autofill, expired, submitting, locked-out |
| Navigation | Keyboard semantics and narrow-screen treatment |
| Dialog | Focus, dismissal, safe placement |
| Transactions | Loading, empty, failure, refresh/pagination |
| Waitlist | Success, duplicate registration, offline, server error |

### 14.4 Motion direction

Recommended:

- Short, restrained transitions.
- Low-amplitude state changes.
- Subtle reveal effects only where useful.
- No essential information conveyed only through animation.
- Respect reduced-motion preferences.

No approved animation timing or easing system was measured.

---

## 15. Accessibility

### 15.1 Calculated contrast

These ratios use observed solid colors.

They are not a full accessibility certification.

| Foreground / background | Ratio | Result |
|---|---:|---|
| `#020202` / `#6CFF94` | 16.17:1 | Excellent for mint-button labels |
| `#FFFFFF` / `#6CFF94` | 1.28:1 | Fails text contrast |
| `#6A706F` / `#FFFFFF` | 5.05:1 | Meets AA normal-text threshold |
| `#9AA09F` / `#020202` | 7.81:1 | Strong on-dark pairing |
| `#6A706F` / `#111313` | 3.69:1 | Insufficient for small normal text |
| `#FA5939` / `#FAFAFA` | 3.07:1 | Insufficient for normal-size error text |
| `#0B7A33` / `#E2FFEA` | 5.13:1 | Suitable success pairing |

### 15.2 Required corrections

- Do not use white labels on mint buttons.
- Increase contrast of dark-form fine print.
- Darken coral for small error text on pale backgrounds.
- Check white text on coral destructive buttons.
- Verify translucent borders and text against their composited backgrounds.

### 15.3 Production requirements

- Meet WCAG AA contrast.
- Use visible persistent field labels.
- Provide visible keyboard focus.
- Keep comfortable 44–48 px touch targets.
- Support text enlargement.
- Support keyboard-only interaction.
- Use appropriate screen-reader semantics.
- Announce changing financial results where appropriate.
- Expose currency codes and transaction signs as text.
- Keep status understandable without color.
- Treat decorative glows/globes as decorative.
- Provide alternatives for meaningful graphics.
- Keep bottom controls clear of device safe areas.
- Respect reduced motion.

---

## 16. Proposed Styling Tokens

These names consolidate the observed appearance.

They are not an export of an existing complete token system.

```css
:root {
  /* Typography */
  --font-ui:
    "Helvetica Now Display",
    "Helvetica Neue",
    Helvetica,
    Arial,
    sans-serif;

  --weight-regular: 400;
  --weight-medium: 500;
  --weight-bold: 700;

  /* Brand */
  --brand-mint: #6cff94;

  /* Foregrounds */
  --ink-primary: #020202;
  --text-secondary: #4a4f4e;
  --text-muted: #6a706f;
  --text-on-dark-muted: #9aa09f;
  --text-success: #0b7a33;

  /* Surfaces */
  --surface-white: #ffffff;
  --surface-app: #fafafa;
  --surface-soft: #f4f6f5;
  --surface-soft-green: #f0f5f1;
  --surface-mint: #e2ffea;
  --surface-mint-strong: #d6ffe1;
  --surface-wallet: #dce3e2;
  --surface-inverse: #020202;
  --surface-dark-card: #111313;
  --surface-dark-highlight: #111413;

  /* Borders and overlays */
  --border-light: #e3e8e7;
  --border-inverse: rgb(255 255 255 / 8%);
  --input-inverse-fill: rgb(255 255 255 / 5%);
  --input-inverse-border: rgb(255 255 255 / 10%);
  --nav-glass-fill: rgb(255 255 255 / 30%);
  --brand-outline: rgb(108 255 148 / 35%);

  /* Radius */
  --radius-input: 16px;
  --radius-card-small: 24px;
  --radius-support: 28px;
  --radius-card: 32px;
  --radius-form: 36px;
  --radius-pill: 999px;

  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* Containers */
  --container-wide: 1280px;
  --container-nav: 1120px;

  /* Shadows */
  --shadow-nav:
    0 4px 24px rgb(0 0 0 / 10%);

  --shadow-card:
    0 8px 28px rgb(0 0 0 / 6%);
}
```

### Typography examples

```css
.display-hero {
  font-family: var(--font-ui);
  font-size: 88px;
  font-weight: var(--weight-bold);
  line-height: 0.98;
  letter-spacing: -0.035em;
}

.heading-section {
  font-family: var(--font-ui);
  font-size: 64px;
  font-weight: var(--weight-bold);
  line-height: 1;
  letter-spacing: -0.03em;
}

.body-large {
  font-family: var(--font-ui);
  font-size: 20px;
  font-weight: var(--weight-regular);
  line-height: 1.5;
}

.body-card {
  font-family: var(--font-ui);
  font-size: 17px;
  font-weight: var(--weight-regular);
  line-height: 1.45;
}
```

### Primary button example

```css
.button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 14px 24px;
  border: 0;
  border-radius: var(--radius-pill);

  background: var(--brand-mint);
  color: var(--ink-primary);

  font-family: var(--font-ui);
  font-size: 18px;
  font-weight: var(--weight-medium);
  line-height: 26px;
}
```

### Card example

```css
.feature-card {
  border-radius: var(--radius-card);
  background: var(--surface-soft);
}
```

### Dark input example

```css
.input-dark {
  box-sizing: border-box;
  min-height: 60px;

  padding: 17px 18px;

  border:
    1px solid var(--input-inverse-border);

  border-radius: var(--radius-input);
  background: var(--input-inverse-fill);
  color: var(--surface-white);

  font-family: var(--font-ui);
  font-size: 16px;
}
```

These are visual primitives, not complete production components.

Add:

- Responsive rules.
- Semantics.
- Focus states.
- Disabled/loading states.
- Form validation.
- Error/success behavior.

Do not use the light-surface muted text token indiscriminately on dark surfaces.

---

## 17. Design-System Gaps

### 17.1 Observed maturity

- No local text styles were returned by the inspection.
- Local paint styles include generic color ramps.
- Those generic ramps do not fully describe the neon-mint website identity.
- Many sampled website fills do not have bound color variables.
- Existing variables include older or generic color values.
- The dedicated Components page contains a navigation set, not a complete website component library.

### 17.2 Recommended definitions

1. Approve the canonical neon palette.
2. Approve the logo lockup.
3. Create semantic light/dark color tokens.
4. Create website typography styles.
5. Create native typography styles separately.
6. Standardize button variants.
7. Standardize input and validation variants.
8. Standardize choice chips.
9. Standardize cards and receipt miniatures.
10. Standardize accordion states.
11. Standardize comparison tables.
12. Standardize dialogs and sheets.
13. Resolve mobile navigation naming.
14. Define interaction states.
15. Define responsive web layouts.
16. Approve status colors.
17. Resolve financial and launch copy.

---

## 18. Do and Don’t

### Do

- Use large, confident headings.
- Keep neutral space generous.
- Use mint selectively.
- Use black text on mint.
- Preserve rounded component hierarchy.
- Explain features through actual product UI.
- Keep amounts and currencies clear.
- Preserve approved brand assets.
- Use content-driven heights.
- Separate measured values from recommendations.

### Don’t

- Use mint for every text element.
- Put white labels on mint buttons.
- Add glow everywhere.
- Shrink desktop layouts into mobile layouts.
- Use fractional illustration text sizes for live UI.
- Mix competing navigation versions.
- Publish unresolved pricing placeholders.
- Treat sample exchange rates as live values.
- Infer supported currencies from illustrations.
- Copy duplicated story sections blindly.
- Let fixed source bounds clip production content.
- Use decorative QR patterns as functional QR codes.

---

## 19. Reproduction Checklist

### Branding

- [ ] Approved logo used.
- [ ] Symbol proportions preserved.
- [ ] Correct light/dark logo variant selected.
- [ ] No unapproved gradients or distortions.
- [ ] General UI uses Helvetica Now Display.

### Typography

- [ ] Correct font weights available.
- [ ] Large headings use compact line height.
- [ ] Negative tracking limited to display text.
- [ ] Body text remains readable.
- [ ] Currency labels remain attached to values.
- [ ] Mobile text uses full-size app measurements.

### Color

- [ ] Primary mint is `#6CFF94`.
- [ ] Main foreground is `#020202`.
- [ ] Mint-button text is near-black.
- [ ] Neutral surfaces dominate.
- [ ] Dark-surface text uses appropriate contrast.
- [ ] Status is not conveyed by color alone.

### Layout

- [ ] Desktop composition follows the 1280 px content reference.
- [ ] Hero columns have intentional balance.
- [ ] Bento uses asymmetric wide/narrow cards.
- [ ] Bento gaps are 24 px.
- [ ] Large bento radii are 32 px.
- [ ] Section spacing remains generous.
- [ ] Layouts grow with content.

### Components

- [ ] Buttons have all required states.
- [ ] Inputs have visible labels.
- [ ] Form errors have recovery guidance.
- [ ] Audience choices behave as one radio group.
- [ ] FAQ is accessible.
- [ ] Tables preserve semantic relationships.
- [ ] Dialog focus is managed.
- [ ] Bottom navigation is version-consistent.

### Responsive and accessibility

- [ ] Small-screen layouts are intentionally reflowed.
- [ ] Text is not excessively reduced.
- [ ] Touch targets are comfortable.
- [ ] Keyboard focus is visible.
- [ ] Screen-reader semantics are present.
- [ ] Text enlargement is supported.
- [ ] Reduced motion is supported.
- [ ] Safe areas are respected.
- [ ] Contrast issues are corrected.

### Content

- [ ] Launch status is consistent.
- [ ] Currency availability is confirmed.
- [ ] `[X]%` is resolved.
- [ ] `[date]` is resolved.
- [ ] Rates and rewards are approved.
- [ ] Competitor claims are verified.
- [ ] Financial/security claims are approved.
- [ ] Repeated source chapters are removed from the intended final sequence.

---

## 20. Reusable Creative Brief

Design in Zazo’s confident minimal fintech language:

- Helvetica Now Display.
- Oversized, tightly tracked, benefit-led headings.
- Generous neutral whitespace.
- Near-black typography.
- Vivid mint `#6CFF94` for primary actions, selection, and rewards.
- Rounded gray-green bento cards.
- Floating white transaction receipts.
- Pill controls.
- Deliberate dark chapters with restrained mint illumination.
- Product-led explanations of global receiving, transparent conversion, and local spending.
- Authentic currency labels and approved brand assets.
- A lighter, calmer, task-focused native app.
- Accessible responsive layouts and explicit interaction states.

Avoid generic finance imagery, excessive glow, competing accent colors, and unsupported product claims.

---

## Final Principle

Reproduce the combination, not just the green:

**Bold compact typography + generous neutral space + rounded product-led compositions + selective mint action + clear financial storytelling.**
