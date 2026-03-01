import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("should display the contact form", async ({ page }) => {
    await expect(page.getByRole("heading", { name: /Get in Touch/i })).toBeVisible();
    await expect(page.getByLabel("Name")).toBeVisible();
    await expect(page.getByLabel("Email")).toBeVisible();
    await expect(page.getByLabel("Subject")).toBeVisible();
    await expect(page.getByLabel("Message")).toBeVisible();
    await expect(page.getByRole("button", { name: /Send Message/i })).toBeVisible();
  });

  test("should show validation errors for empty form submission", async ({ page }) => {
    // Click submit without filling the form
    await page.getByRole("button", { name: /Send Message/i }).click();
    
    // Check for validation error messages
    await expect(page.getByText("Name is required")).toBeVisible();
    await expect(page.getByText("Email is required")).toBeVisible();
    await expect(page.getByText("Subject is required")).toBeVisible();
    await expect(page.getByText("Message is required")).toBeVisible();
  });

  test("should show error for invalid email", async ({ page }) => {
    // Fill name
    await page.getByLabel("Name").fill("Test User");
    
    // Fill invalid email
    await page.getByLabel("Email").fill("invalid-email");
    
    // Fill subject
    await page.getByLabel("Subject").fill("Test Subject");
    
    // Fill message
    await page.getByLabel("Message").fill("This is a test message.");
    
    // Submit
    await page.getByRole("button", { name: /Send Message/i }).click();
    
    // Check for email validation error
    await expect(page.getByText("Please enter a valid email address")).toBeVisible();
  });

  test("should show error for short message", async ({ page }) => {
    // Fill all fields with short message
    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Subject").fill("Test Subject");
    await page.getByLabel("Message").fill("Short");
    
    // Submit
    await page.getByRole("button", { name: /Send Message/i }).click();
    
    // Check for message length validation error
    await expect(page.getByText("Message must be at least 10 characters")).toBeVisible();
  });

  test("should clear validation errors when user types", async ({ page }) => {
    // Click submit to trigger errors
    await page.getByRole("button", { name: /Send Message/i }).click();
    
    // Verify name error is shown
    await expect(page.getByText("Name is required")).toBeVisible();
    
    // Start typing in name field
    await page.getByLabel("Name").fill("John");
    
    // Error should be cleared
    await expect(page.getByText("Name is required")).not.toBeVisible();
  });

  test("should submit form successfully with valid data", async ({ page }) => {
    // Fill all fields correctly
    await page.getByLabel("Name").fill("Test User");
    await page.getByLabel("Email").fill("test@example.com");
    await page.getByLabel("Subject").fill("Test Subject");
    await page.getByLabel("Message").fill("This is a test message with more than 10 characters.");
    
    // Submit
    await page.getByRole("button", { name: /Send Message/i }).click();
    
    // Should show loading state briefly then success
    await expect(page.getByText("Message Sent!")).toBeVisible({ timeout: 10000 });
  });

  test("should display social links", async ({ page }) => {
    await expect(page.getByRole("link", { name: /GitHub/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /LinkedIn/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Twitter/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Email/i })).toBeVisible();
  });

  test("should display availability status", async ({ page }) => {
    await expect(page.getByText("Available for opportunities")).toBeVisible();
  });
});

