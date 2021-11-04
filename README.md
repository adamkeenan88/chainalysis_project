# **Chainalysis Take Home Project**

## Created single page application with React frontend and Express/MongoDB backend.

### Application utilizes two crypto pricing exchange's API to pull in Bitcoin and Ethereum prices, then sends the instance to the backend to store, and is then recalled to display.

### After the last prices are recalled, they are displayed and the page provides recommendations (with links) to which exchange is better to buy or sell on.

Live website link: http://18.221.52.126

# **Questionnaire**

Q: Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?

A: In the APIs for my two exchanges, there was not a designated "buy" or "sell" price, so I only included the price provided (this was pretty consistent across the 4-5 APIs I researched). Also, while my data is being stored in a MongoDB and then recalled from that, I utilize a frontend API call to get my data. I believe there is a way to create these calls directly from the backend, but for the time available this was the cleanest way I could think to utilize both frontend and backend implementation.

Q: Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it).

A: I don't believe I over-designed anything in particular. I started with multiple buttons that had onClick functions for storing and recalling data but I was able to streamline those into useEffect hooks with different parameters so they ran consecutively and waited until the previous hook had finished so complete info was available prior to the subsequent hook.

Q: If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

A: I don't believe, or am unaware of if I would need to make any changes at this point for increased user activity. The useEffect hooks run on page load, and they are consecutive firing. The data is recalled from the database on a per instance basis. Each single user will be pulling their "own" price entry from the database so there shouldn't be multiple database pulls for the same stockId.

Q: What are some other enhancements you would have made, if you had more time to do this implementation?

A: I would include styling to present the information in a "prettier" fashion. I did not implement any CSS styling for this project and timeframe, but I know that I could wrap the price displays within a table to set them off a bit more. When I began the project, I built an entirely frontend based project with the API calls and, without hard-coding prices, had fields display the different prices in real-time upon refresh. The functionality was similar to the final project, but seemed more efficient for the task at hand. I would also look to try and add an actual stock ticker ribbon at the top of the page that would scroll with current crypto exchange information just to add some more information to the page as well.
