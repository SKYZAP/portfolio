import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to all pages from the navbar", async ({ page }) => {
    await page.goto("/");
    
    // Verify home page loads
    await expect(page).toHaveTitle(/Portfolio/);
    await expect(page.getByRole("heading", { name: /Alex Developer/i })).toBeVisible();
    
    // Navigate to Works page
    await page.getByRole("banner").getByRole("link", { name: "Works" }).click();
    await expect(page).toHaveURL("/works");
    await expect(page.getByRole("heading", { name: /My Works/i })).toBeVisible();
    
    // Navigate to About page
    await page.getByRole("banner").getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL("/about");
    await expect(page.getByRole("heading", { name: /About Me/i })).toBeVisible();
    
    // Navigate to Contact page
    await page.getByRole("banner").getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL("/contact");
    await expect(page.getByRole("heading", { name: /Get in Touch/i })).toBeVisible();
    
    // Navigate back to Home
    await page.getByRole("banner").getByRole("link", { name: "Home" }).click();
    await expect(page).toHaveURL("/");
  });

  test("should have active navigation state for current page", async ({ page }) => {
    await page.goto("/works");
    
    // Works link should have active styling
    const worksLink = page.getByRole("banner").getByRole("link", { name: "Works" });
    await expect(worksLink).toBeVisible();
    
    await page.goto("/about");
    const aboutLink = page.getByRole("banner").getByRole("link", { name: "About" });
    await expect(aboutLink).toBeVisible();
  });

  test("should have working footer links", async ({ page }) => {
    await page.goto("/");
    
    // Check footer exists
    const footer = page.getByRole("contentinfo");
    await expect(footer).toBeVisible();
    
    // Check quick links in footer
    await expect(footer.getByRole("link", { name: "Home" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Works" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "About" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("should have social links in footer", async ({ page }) => {
    await page.goto("/");
    
    const footer = page.getByRole("contentinfo");
    
    // Check social links exist
    await expect(footer.getByRole("link", { name: "GitHub" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "LinkedIn" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Twitter" })).toBeVisible();
    await expect(footer.getByRole("link", { name: "Email" })).toBeVisible();
  });
});

test.describe("Theme Toggle", () => {
  test("should toggle between light and dark theme", async ({ page }) => {
    await page.goto("/");
    
    const themeToggle = page.getByRole("button", { name: "Toggle theme" });
    await expect(themeToggle).toBeVisible();
    
    // Click to toggle theme
    await themeToggle.click();
    
    // Wait for theme to apply
    await page.waitForTimeout(300);
    
    // Toggle back
    await themeToggle.click();
    await page.waitForTimeout(300);
  });
});

