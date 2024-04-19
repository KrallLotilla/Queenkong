from selenium import webdriver

# Initialize the WebDriver for Chrome
driver = webdriver.Chrome()

# Open a webpage
driver.get("https://www.example.com")

# Find an element by its CSS selector and click it
element = driver.find_element_by_css_selector("button.btn-primary")
element.click()

# Find an input field and enter text
input_field = driver.find_element_by_id("searchInput")
input_field.send_keys("Selenium programming")

# Close the browser
driver.quit()
