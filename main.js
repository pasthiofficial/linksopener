/* Page scroll percentage*/
const updateScrollPercentage = function() {
  const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.body.offsetHeight,
    percentage = document.querySelector("[data-scrollPercentage] .percentage")
  percentageVal = document.querySelector("#percentage-value")

  if (bodyHeight - contentScrolled <= heightOfWindow) {
    percentageVal.textContent = percentage.style.width = "100%"
  }
  else {
    const total = bodyHeight - heightOfWindow,
      got = contentScrolled,
      percent = parseInt((got / total) * 100)
    percentageVal.textContent = percentage.style.width = percent + "%"
  }
}

window.addEventListener('scroll', updateScrollPercentage)








:root{

  

This should work for you:

#example.com/page will display the contents of example.com/page.html

RewriteCond %{REQUEST_FILENAME} !-f

RewriteCond %{REQUEST_FILENAME} !-d

RewriteCond %{REQUEST_FILENAME}.html -f

RewriteRule ^(.+)$ $1.html [L,QSA]

#301 from example.com/page.html to example.com/page

RewriteCond %{THE_REQUEST} ^[A-Z]{3,9}\ /.*\.html\ HTTP/

RewriteRule ^(.*)\.html$ /$1 [R=301,L]

  

}












let play = function(){document.getElementById("audio").play()}
