from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the WebDriver for Chrome
driver = webdriver.Chrome()

# Open Reddit's homepage
driver.get("https://www.reddit.com/hot/")

# Wait for the page to load and for elements to become available
wait = WebDriverWait(driver, 10)
wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "h3._eYtD2XCVieq6emjKBH3m")))

# Find all the post titles
post_titles = driver.find_elements_by_css_selector("h3._eYtD2XCVieq6emjKBH3m")

# Print the titles
for title in post_titles:
    print(title.text)

# Close the browser
driver.quit()
