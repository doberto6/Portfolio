# Portfolio UI/UX Redesign Plan

## 1. Design Direction

### Core idea: Personal engineering notebook

The portfolio should feel like Diego's personal notebook: organized enough to scan quickly, but filled with small signs of personality. The school influence should come from familiar objects and interactions rather than making the site look like a classroom.

The final experience should feel:

- Minimal, readable, and professional
- Playful without feeling childish
- Personal rather than template-driven
- Animated without constantly moving
- Open and layered instead of built entirely from boxes

### Visual thesis

Use an open paper-like canvas with a few tactile elements placed on top: sticky notes, taped photos, pinned project screenshots, sticker-like logos, underlines, and hand-drawn accents. Most content should sit directly on the page. Framed surfaces should be reserved for things a visitor can interact with.

## 2. Design Principles

1. **Open canvas first**
   Avoid placing every paragraph inside a card. Use whitespace, alignment, and typography to organize most content.

2. **One playful object per view**
   Each tab should have one memorable interaction, such as a sticky note, unfolding project, photo slider, or draggable sticker. Do not stack multiple visual tricks in the same viewport.

3. **Cartoon through shape and motion**
   Use imperfect rounded edges, slight rotations, expressive hover movement, and illustrated accents. Keep the typography and information architecture clean.

4. **Motion must communicate**
   Animation should show that something opened, changed, moved forward, or became selected. Nothing should float or pulse without a reason.

5. **Personality stays optional**
   Visitors who want the resume-level information should find it immediately. Personal details should reward exploration without blocking projects, experience, or contact information.

## 3. Visual System

### Color palette

- Paper: warm off-white
- Ink: near-black charcoal
- Steel blue: technical accent
- Sticky-note yellow: personal/fun content
- Tomato red: small action and emphasis color
- Lime green: occasional project or achievement accent

Use the bright colors in small amounts. Most of the interface should remain paper, ink, and gray.

### Shapes

- Use asymmetric corner radii instead of perfect rounded rectangles.
- Give interactive surfaces slightly different silhouettes.
- Use subtle CSS `clip-path` shapes for paper tabs, labels, and note corners.
- Keep body text on the open page instead of inside outlined containers.
- Avoid nesting cards inside cards.

### Typography

- Keep the current clean sans-serif for all important reading.
- Use a handwritten-style font only for tiny labels, annotations, or sticky notes.
- Never use the handwritten font for paragraphs, navigation, dates, or project descriptions.
- Keep headings compact so the design feels intentional rather than like a marketing landing page.

### Texture and detail

- Retain a very subtle paper grain or notebook-line texture.
- Use tape, pins, underlines, and scribbles sparingly.
- Create decorative accents in CSS when possible.
- Do not add background blobs, floating orbs, or decorative gradients.

## 4. Navigation

### Current issue

The top tab bar works, but it still feels like a standard application control floating above a set of boxed pages.

### Proposed treatment

Turn the navigation into a row of notebook index tabs:

- Keep it at the top of each page in normal document flow.
- Give the active tab a slightly raised paper-tab shape.
- Use a short underline or folded corner to show selection.
- Animate selection with a quick horizontal slide, not a fade-only transition.
- Preserve icons and text for clarity.
- Keep the full control compact on mobile with horizontal scrolling.

## 5. Home View

### Goal

Make the home page feel immediately personal without adding clutter.

### Layout

- Keep Diego's name and short introduction on the left.
- Keep the headshot on the right.
- Remove the feeling that the portrait is trapped in a standard card.
- Present the photo like a slightly rotated print taped to the page.
- Place contact links as small utility labels below the introduction.

### Signature interaction

Add a small "Currently" sticky tab near the portrait. It can rotate between short updates such as:

- Incoming Software Engineer at Pinterest
- Building AI and data tools
- Training BJJ and powerlifting

The note changes only when clicked, so the home page remains calm.

## 6. Projects View

### Current issue

The project rectangles are clear, but the repeated card grid makes the section feel static.

### Proposed layout

Use a staggered project wall:

- Show project screenshots as wide poster-like images on an open canvas.
- Slightly offset alternating projects vertically.
- Use small taped labels for the year, event, and awards.
- Give hackathon winners a visible award sticker rather than only another text tag.
- Keep chronological ordering from newest to oldest.

### Project interaction

When a project is selected:

- The project expands like an unfolded case-study sheet.
- The screenshot stays on the left and details appear on the right.
- Tech tags resemble small label-maker strips.
- GitHub, Devpost, and live-site actions stay visually consistent.
- Other project posters remain visible enough to encourage continued browsing.

### Motion

- Hover: image lifts 4-6 pixels and rotates toward zero degrees.
- Select: details unfold vertically with a short spring motion.
- Award sticker: no looping animation; it can stamp into place once when opened.

## 7. Experience View

### Current issue

The logo grid is effective, but identical squares make every company feel equally static.

### Proposed layout

Treat company logos like collected stickers:

- Keep a clean grid for scanning.
- Allow subtle size variation while maintaining alignment.
- Use fluid sticker edges and a faint paper shadow.
- Remove permanent text from the logo tiles, as in the current design.
- Reveal role and dates on hover/focus.

### Experience interaction

- Hover: sticker lifts, tilts slightly, and reveals role/date information.
- Click: a pinned briefing sheet opens below the grid with impact bullets.
- Current and incoming roles receive a small corner label.
- Keep every detail accessible by keyboard and touch.

## 8. About View

### Existing foundation

The image carousel and sticky-note fact section are the strongest starting point for the new direction.

### Carousel improvements

- Replace placeholders with Diego's real photos later.
- Make each image resemble a taped photo or scrapbook print.
- Transition slides with a horizontal paper-slide motion.
- Keep the story text aligned and easy to read.
- Allow touch swiping on mobile.
- Keep arrows and progress dots visible and stable.

### Sticky-note facts

- Keep the yellow note and taped top edge.
- Change facts only on click.
- Add a tiny paper-flip animation when the fact changes.
- Do not rotate the note so far that text becomes harder to read.

### Favorite games interaction

Add a compact "Favorites" strip below the main About carousel:

- Display favorite games as cartridge, disc, or cover-shaped buttons.
- Selecting a game opens a small side panel with why Diego likes it.
- An original cartoon avatar can react differently to each game category.
- Example reactions: competitive stance, relaxed controller pose, surprised expression, or focused strategy pose.
- Keep the avatar original and inspired by Diego's personality rather than copying a copyrighted game character.
- If official game cover art is used later, use assets supplied by Diego or properly sourced promotional media.

This section should be optional and compact. It should not become a second projects gallery.

## 9. Contact View

### Proposed treatment

Present contact information like a clean postcard or note left on a desk:

- Keep email, LinkedIn, and GitHub immediately visible.
- Use one strong email action and quieter social links.
- Retain the copy-email feedback.
- Add a small handwritten-style sign-off, such as "Let's build something useful."
- Avoid a large contact card nested beside another card.

## 10. Motion System

Use three levels of motion:

### Level 1: Feedback

- Button press
- Hover lift
- Active navigation state
- Copy-email confirmation

Duration: 120-180ms.

### Level 2: Content change

- Carousel slide
- Project detail unfold
- Experience detail reveal
- Sticky-note fact flip

Duration: 220-320ms.

### Level 3: View change

- Tab/page transition
- Use a short directional slide with opacity.
- Keep the navigation stable.

Duration: 250-350ms.

All motion must respect `prefers-reduced-motion`.

## 11. Responsive Behavior

- Desktop: layered compositions and controlled overlap are allowed.
- Tablet: reduce rotations and overlap; keep two-column layouts where readable.
- Mobile: use one primary column, full-width media, and swipeable carousels.
- Never hide important information behind hover-only behavior on touch devices.
- Ensure all text remains readable at 200% zoom.
- Keep navigation and carousel controls large enough for touch.

## 12. Asset Checklist

Diego will provide:

- 3-5 personal photos for the About carousel
- Favorite game names and optional cover images
- Optional photos for BJJ, pickleball, powerlifting, friends, family, or food
- Any preferred doodles, signatures, or handwritten samples

Assets to create in code:

- Paper tabs
- Tape strips
- Sticky-note fold/shadow
- Award sticker
- Label-maker tags
- Original simple avatar states for the favorite-games interaction

## 13. Implementation Phases

### Phase 1: Shared visual language

- Finalize color, corner, shadow, and motion tokens.
- Restyle navigation as notebook tabs.
- Remove unnecessary framed containers.
- Apply the paper/sticker visual language consistently.

### Phase 2: Core portfolio views

- Redesign Home composition.
- Convert Projects into the staggered poster wall.
- Convert Work logos into sticker-like experience tiles.
- Simplify Contact into the postcard layout.

### Phase 3: Personal interactions

- Finish the About photo carousel when images arrive.
- Add sticky-note fact transitions.
- Build the favorite-games selector and original avatar reactions.

### Phase 4: Polish and validation

- Tune motion and reduced-motion behavior.
- Test keyboard and touch interactions.
- Verify desktop, tablet, and mobile layouts.
- Check image crops, text overflow, contrast, and loading behavior.
- Remove any decoration that competes with the content.

## 14. Success Criteria

The redesign is successful when:

- The portfolio feels recognizably personal before reading every sentence.
- Projects and experience remain easy to scan in under 30 seconds.
- No view feels like a generic grid of cards.
- Every playful interaction has a clear purpose.
- The school/notebook theme is visible but not overwhelming.
- The design still feels credible for engineering recruiters and collaborators.
- Mobile visitors receive the same content and personality without clutter.

## 15. Recommended First Build

Start with Phase 1 and the Home view. This establishes the notebook tabs, fluid edges, paper surfaces, and motion rules once. After those shared pieces feel right, apply them to Projects and Experience before adding the more specialized favorite-games interaction.
