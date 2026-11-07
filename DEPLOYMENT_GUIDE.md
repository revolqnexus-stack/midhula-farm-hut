# Deployment Guide — Midhula Farm Hut

## Prerequisites

Before deploying, ensure you have:

1. **Shopify Partner Account** (free)
   - Sign up at: https://partners.shopify.com/

2. **Development Store** (free)
   - Create a development store from your Partner Dashboard
   - Store name format: `your-store-name.myshopify.com`

3. **Shopify CLI** (already installed)
   - Version 4.9.4 confirmed

## Step 1: Connect to Shopify Store

### Option A: Using Shopify CLI (Recommended)

1. **Navigate to theme directory:**
   ```bash
   cd /Users/ajmal/fish/midhula-farm-hut
   ```

2. **Login to Shopify:**
   ```bash
   shopify auth login
   ```
   This will open a browser for authentication.

3. **Start development server:**
   ```bash
   shopify theme dev --store=your-store-name.myshopify.com
   ```
   Replace `your-store-name` with your actual store name.

4. **Preview the theme:**
   - Shopify CLI will provide a preview URL
   - The theme hot-reloads when you make changes

### Option B: Manual Upload

1. **Zip the theme:**
   ```bash
   cd /Users/ajmal/fish
   zip -r midhula-farm-hut.zip midhula-farm-hut -x "*.DS_Store"
   ```

2. **Upload via Shopify Admin:**
   - Go to: Online Store > Themes
   - Click "Add theme" > "Upload zip file"
   - Select `midhula-farm-hut.zip`

## Step 2: Configure Theme Settings

Once the theme is installed:

1. **Go to:** Online Store > Themes > Customize

2. **Configure Colors:**
   - Theme settings > Colors
   - Confirm or adjust the brand colors

3. **Upload Logo:**
   - Theme settings > Branding > Logo
   - Recommended: SVG or PNG with transparent background

4. **Set WhatsApp Number:**
   - Theme settings > Contact > WhatsApp Number
   - Format: Country code + number (e.g., `918129120437`)

5. **Add Instagram URL:**
   - Theme settings > Social Media > Instagram URL
   - Example: `https://www.instagram.com/midhula_farm_hut/`

## Step 3: Upload Image Assets

Before the site looks complete, you need to generate and upload the storytelling images.

### Priority Assets (Generate First):

1. **Hero Section:**
   - Hero background: 2400x1350px aquatic environment
   - Hero fish: 1200x1200px transparent cutout (guppy or betta)
   
2. **Lifecycle Story (4 images):**
   - Egg: 800x800px
   - Fry: 800x800px
   - Juvenile: 800x800px
   - Adult: 800x800px
   
3. **Farm Introduction:**
   - Farm panorama: 2560x1097px wide shot

4. **Care & Trust:**
   - Hand holding fish: 1200x1500px portrait

See `IMAGE_ASSET_GUIDE.md` for complete generation prompts and specifications.

### Upload Process:

1. Go to theme editor
2. Click on each section
3. Use the image picker to upload assets
4. Shopify will automatically host and optimize them

## Step 4: Create Collections

The theme displays fish collections dynamically. Create these in Shopify Admin:

1. **Go to:** Products > Collections

2. **Create collections for:**
   - Guppies
   - Bettas
   - Swordtails
   - Platies
   - Cichlids
   - Crayfish
   - Crabs (optional)

3. **Add collection images:**
   - Use the species transparent cutouts
   - 1000x1000px recommended

4. **Link collections in theme:**
   - In theme editor, go to "Featured Collections" section
   - Add collection blocks
   - Select each collection from dropdown

## Step 5: Add Products

Create actual products to test the shopping experience:

1. **Go to:** Products > Add product

2. **Example product structure:**
   - Title: "Fancy Guppy - Red Dragon"
   - Description: Care requirements, size, temperament
   - Images: Clear fish photography
   - Price: [TO BE CONFIRMED]
   - Inventory: Track quantity
   - Collections: Assign to relevant collection

3. **Add WhatsApp inquiry option:**
   - The theme includes WhatsApp CTA functionality
   - Customers can inquire about specific products

## Step 6: Configure Announcement Bar

1. In theme editor, click "Announcement bar" section
2. Edit text: "🐠 Wednesday is dispatch day! Order now for next delivery."
3. Adjust background color if needed
4. Toggle visibility on/off

## Step 7: Test the Website

### Desktop Testing:
- [ ] Hero animation loads correctly
- [ ] Navigation is sticky and functional
- [ ] All sections display properly
- [ ] Images load and display correctly
- [ ] Collection links work
- [ ] WhatsApp links open correctly
- [ ] Footer social links work
- [ ] Cart functionality works

### Mobile Testing:
- [ ] Mobile menu opens/closes
- [ ] Hero is properly composed
- [ ] All sections are readable
- [ ] CTAs are easily tappable
- [ ] Images load appropriately
- [ ] Horizontal scroll is prevented
- [ ] Animations don't cause performance issues

### Accessibility Testing:
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Alt text is present on images
- [ ] Color contrast is sufficient
- [ ] Screen reader friendly

## Step 8: Deploy to Live Store

### Option A: Development Store (for competition submission)

1. **Share the preview URL:**
   ```
   https://your-store-name.myshopify.com/?preview_theme_id=THEME_ID
   ```

2. **Or publish the theme:**
   - In Shopify Admin: Themes
   - Find your theme
   - Click "Publish"

### Option B: Push Theme via CLI

```bash
cd /Users/ajmal/fish/midhula-farm-hut
shopify theme push --store=your-store-name.myshopify.com
```

Confirm when asked if you want to push to the live theme.

## Step 9: Final Checklist

Before competition submission:

- [ ] All images are uploaded and displaying
- [ ] At least 3-5 collections are created and populated
- [ ] Some sample products exist
- [ ] WhatsApp number is confirmed and working
- [ ] Instagram link is correct
- [ ] Mobile version is tested
- [ ] Hero section is visually impressive
- [ ] Lifecycle animation works
- [ ] Wednesday dispatch section tells the story
- [ ] Footer information is accurate
- [ ] Site loads quickly (under 3 seconds)
- [ ] No console errors
- [ ] Preview URL is accessible

## Common Issues & Solutions

### Issue: Theme won't upload
**Solution:** Make sure you're in the correct directory and the zip doesn't include extra folders.

### Issue: Images not displaying
**Solution:** Verify images are uploaded in theme customizer, not just placed in assets folder.

### Issue: Collections showing as empty
**Solution:** Ensure you've created collections in Shopify Admin and assigned them in the theme editor.

### Issue: WhatsApp links not working
**Solution:** Verify the WhatsApp number format (country code + number, no spaces or +).

### Issue: Mobile menu not opening
**Solution:** Check browser console for JavaScript errors. Ensure custom.js is loading.

## Performance Optimization

After deployment:

1. **Enable Shopify CDN** (automatic)
2. **Use WebP images** where possible
3. **Test on slow connections:** Use Chrome DevTools throttling
4. **Monitor Core Web Vitals** via Shopify Analytics

## Support & Maintenance

After winning the competition:

1. **Request access** to the actual Midhula Farm Hut Shopify store
2. **Migrate the theme** from development to production
3. **Add real products** with owner's input
4. **Refine copy** based on owner feedback
5. **Generate final image assets** with owner approval
6. **Set up analytics** (Google Analytics, Facebook Pixel if needed)
7. **Train the owner** on managing products and content

## Competition Submission

**What to submit:**

1. **Live URL:** `https://your-store-name.myshopify.com/`
2. **GitHub repository:** (if required)
3. **Documentation:** This README and guides
4. **Video walkthrough:** (optional but recommended)

**Emphasize in your submission:**

- Unique storytelling approach
- Editorial visual design
- Mobile-first responsive
- Shopify theme editor compatible
- Wednesday dispatch signature feature
- Lifecycle storytelling innovation
- Ready for immediate use and expansion

---

**Competition Goal Achieved:**

✅ Homepage designed and built  
✅ Shopify-native architecture  
✅ Scalable for full project  
✅ Demonstrates understanding of the farm  
✅ Fish presented beautifully  
✅ Can help sell more fish  
✅ Developer can build complete store  

**"Small worlds. Extraordinary colours."**
