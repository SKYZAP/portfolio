import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display hero section with name and role", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.getByRole("heading", { name: /Alex Developer/i })).toBeVisible();
    await expect(page.getByText(/Crafting digital experiences with code/i)).toBeVisible();
  });

  test("should display CTA buttons", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.getByRole("link", { name: /Get in Touch/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Download CV/i })).toBeVisible();
  });

  test("should display featured works section", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.getByRole("heading", { name: /Featured Works/i })).toBeVisible();
  });

  test("should display tech stack section", async ({ page }) => {
    await page.goto("/");
    
    await expect(page.getByRole("heading", { name: /Tech Stack/i })).toBeVisible();
    
    // Check some tech icons are present
    await expect(page.getByText("React")).toBeVisible();
    await expect(page.getByText("Next.js")).toBeVisible();
    await expect(page.getByText("TypeScript")).toBeVisible();
  });

  test("should navigate to works page from View All Projects button", async ({ page }) => {
    await page.goto("/");
    
    await page.getByRole("link", { name: /View All Projects/i }).click();
    await expect(page).toHaveURL("/works");
  });
});

test.describe("Works Page", () => {
  test("should display project cards", async ({ page }) => {
    await page.goto("/works");
    
    await expect(page.getByRole("heading", { name: /My Works/i })).toBeVisible();
    
    // Check some project titles are visible
    await expect(page.getByText("E-Commerce Platform")).toBeVisible();
    await expect(page.getByText("Task Management App")).toBeVisible();
  });

  test("should have filter buttons", async ({ page }) => {
    await page.goto("/works");
    
    await expect(page.getByRole("button", { name: /All Projects/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Web Apps/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Mobile/i })).toBeVisible();
    await expect(page.getByRole("button", { name: /Open Source/i })).toBeVisible();
  });

  test("should filter projects by category", async ({ page }) => {
    await page.goto("/works");
    
    // Click Mobile filter
    await page.getByRole("button", { name: /Mobile/i }).click();
    
    // Should show mobile projects
    await expect(page.getByText("Fitness Tracking Mobile App")).toBeVisible();
    
    // Click Open Source filter
    await page.getByRole("button", { name: /Open Source/i }).click();
    
    // Should show open source projects
    await expect(page.getByText("Open Source CLI Tool")).toBeVisible();
  });
});

test.describe("About Page", () => {
  test("should display bio section", async ({ page }) => {
    await page.goto("/about");
    
    await expect(page.getByRole("heading", { name: /About Me/i })).toBeVisible();
    await expect(page.getByText(/passionate full-stack developer/i)).toBeVisible();
  });

  test("should display skills section", async ({ page }) => {
    await page.goto("/about");
    
    await expect(page.getByRole("heading", { name: /Skills & Expertise/i })).toBeVisible();
    await expect(page.getByText("Frontend Development")).toBeVisible();
    await expect(page.getByText("Backend Development")).toBeVisible();
  });

  test("should display experience timeline", async ({ page }) => {
    await page.goto("/about");
    
    await expect(page.getByRole("heading", { name: /Work Experience/i })).toBeVisible();
    await expect(page.getByText("Senior Full Stack Developer")).toBeVisible();
    await expect(page.getByText("Tech Startup Inc.")).toBeVisible();
  });

  test("should have download resume button", async ({ page }) => {
    await page.goto("/about");
    
    await expect(page.getByRole("link", { name: /Download Resume/i })).toBeVisible();
  });
});

