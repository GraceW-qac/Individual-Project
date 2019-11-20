package individualProject.projectTesting;

//import static org.junit.Assert.assertTrue;

import org.junit.After;
import org.junit.Before;
//import org.junit.Ignore;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class EndToEndTest {

	WebDriver driver;

	@Before
	public void setup() throws InterruptedException {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Grace\\Desktop\\QA Consulting\\Individual Project\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();

	}

//	@Ignore
	@Test
	public void test() throws InterruptedException {

		driver.get("file:///C:/Users/Grace/Desktop/QA%20Consulting/Individual%20Project/front_end/homePage.html");
		Thread.sleep(10000);

		WebElement allChar = driver.findElement(By.xpath("/html/body/div/nav/a[1]"));
		allChar.click();
		Thread.sleep(2000);

		WebElement house2 = driver.findElement(By.xpath("/html/body/div[2]/div/div[2]/div[1]/h5/button"));
		house2.click();
		Thread.sleep(2000);

		WebElement house3 = driver.findElement(By.xpath("/html/body/div[2]/div/div[3]/div[1]/h5/button"));
		house3.click();
		Thread.sleep(2000);

		WebElement house4 = driver.findElement(By.xpath("/html/body/div[2]/div/div[4]/div[1]/h5/button"));
		house4.click();
		Thread.sleep(2000);

		WebElement house5 = driver.findElement(By.xpath("/html/body/div[2]/div/div[5]/div[1]/h5/button"));
		house5.click();
		Thread.sleep(2000);

		WebElement house6 = driver.findElement(By.xpath("/html/body/div[2]/div/div[6]/div[1]/h5/button"));
		house6.click();
		Thread.sleep(2000);

		WebElement house7 = driver.findElement(By.xpath("/html/body/div[2]/div/div[7]/div[1]/h5/button"));
		house7.click();
		Thread.sleep(2000);

		WebElement signIn = driver.findElement(By.xpath("/html/body/div[2]/nav/a[1]"));
		signIn.click();
		Thread.sleep(2000);

		WebElement usernameInput = driver.findElement(By.xpath("/html/body/div[2]/form/div[1]/input"));
		usernameInput.sendKeys("Baeden");
		Thread.sleep(200);

		WebElement passwordInput = driver.findElement(By.xpath("/html/body/div[2]/form/div[2]/input"));
		passwordInput.sendKeys("password1");
		Thread.sleep(200);

		WebElement signUp = driver.findElement(By.xpath("/html/body/div[2]/nav/a[2]"));
		signUp.click();
		Thread.sleep(2000);

		WebElement newFirstName = driver.findElement(By.xpath("/html/body/div[2]/form/div[1]/div[1]/input"));
		newFirstName.sendKeys("test");
		Thread.sleep(200);

		WebElement newLastName = driver.findElement(By.xpath("/html/body/div[2]/form/div[1]/div[2]/input"));
		newLastName.sendKeys("test");
		Thread.sleep(200);
		
		WebElement newUsername = driver.findElement(By.xpath("/html/body/div[2]/form/div[1]/div[3]/div/input"));
		newUsername.sendKeys("testUser");
		Thread.sleep(200);
		
		WebElement newEmail = driver.findElement(By.xpath("/html/body/div[2]/form/div[2]/div[1]/input"));
		newEmail.sendKeys("test@exampleemail.com");
		Thread.sleep(200);
		
		WebElement newPassword = driver.findElement(By.xpath("/html/body/div[2]/form/div[2]/div[2]/input"));
		newPassword.sendKeys("testPassword");
		Thread.sleep(200);
		
		WebElement newFave = driver.findElement(By.xpath("/html/body/div[2]/form/div[2]/div[3]/input"));
		newFave.sendKeys("Cersei");
		Thread.sleep(200);
		
		driver.get("file:///C:/Users/Grace/Desktop/QA%20Consulting/Individual%20Project/front_end/yourFavourite.html");
		Thread.sleep(10000);
		
	}

	@After
	public void teardown() {
		driver.close();
	}
}
