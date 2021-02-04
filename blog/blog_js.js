var blog = document.getElementById('Blog');
var body= document.querySelector('body');    

function original_color(e){
    e.target.style.background = "black"
}
function bgcolor(e){
    e.target.style.background = "rgb(195,15,15)";       
}

// function_for_OLDER ARTICLES
function old_articles(){

    var blog_div = document.createElement('div');
    blog_div.setAttribute('id','blog_image');
    body.append(blog_div);

    // BLOG_Content
    var content = document.createElement('div');
    content.setAttribute('id', 'content');
    body.append(content)

    // BLOG_Content_olderPosts
    var new_posts = document.createElement('div');
    new_posts.setAttribute('class', 'new_posts');
    content.append(new_posts);

    // article 1
    var  article_1 = document.createElement('article');
    article_1.setAttribute('class', 'article');
    new_posts.append(article_1);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Slack Email Integration: Sending and Receiving Emails";
    article_1.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_1.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "OCTOBER 31, 2020"; // date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "PIOTR MALEK"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT"; // comment
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_1.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Slack can be easily integrated with email clients for both sending and receiving emails. We explore many different approaches.";
    article_1.append(brief)

    // article 2
    var  article_2 = document.createElement('article');
    article_2.setAttribute('class', 'article');
    new_posts.append(article_2);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "&nbsp and HTML Space Challenges and Tricks";
    article_2.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_2.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "OCTOBER 29, 2020"; // date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "PIOTR MALEK"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT"; // comment
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_2.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "&nbsp, or non-breaking space, is an HTML character used to create a space. We analyze when to use it and when to opt for other solutions.";
    article_2.append(brief)

    // article 3
    var  article_3 = document.createElement('article');
    article_3.setAttribute('class', 'article');
    new_posts.append(article_3);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Confirmation Email Samples";
    article_3.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_3.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "OCTOBER 19, 2020"; //date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'name_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "DIANA LE"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT"; // comment
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_3.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "In this post, we have demonstrated 20+ examples of confirmation emails, including order, shipment, appointment, payment, reservation, and other occasions. We have also explained what is good about each of them so you can easily craft your own template. Hopefully this post will help you create better emails.";
    article_3.append(brief)

    // article 4
    var  article_4 = document.createElement('article');
    article_4.setAttribute('class', 'article');
    new_posts.append(article_4);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Ultimate Guide for Ecommerce Email Marketing";
    article_4.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_4.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "SEPTEMBER 23, 2020"; // date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "LEIGH-ANNE TRUITT"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT"; // content
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_4.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Learn about email marketing for ecommerce, including how to get started, how to write compelling email copy, and what types of email to send.";
    article_4.append(brief);

    // article 5
    var  article_5 = document.createElement('article');
    article_5.setAttribute('class', 'article');
    new_posts.append(article_5);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Inspiring Email Startups";
    article_5.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_5.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "SEPTEMBER 22, 2020"; // date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'name_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "DIANA LE"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT"; // content
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_5.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = `The number of new email startups proves that email is on the rise again. In this post, we talk about inspiring email startups to follow. 
    With the technologies, principles, and marketing strategy they use, they are able to bring email to a new level.`;
    article_5.append(brief);

    // article 7
    var  article_6 = document.createElement('article');
    article_6.setAttribute('class', 'article');
    new_posts.append(article_6);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Merging Email and Pricing Automation Strategies";
    article_6.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_6.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "SEPTEMBER 14, 2020"; // date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "BASAK SARICAYIR"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT"; // content
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_6.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = `Combining automated price tracking and personalized emails can lead to some excellent results. Learn how to do it right with our tutorial.`;
    article_6.append(brief);

    // article 7
    var  article_7 = document.createElement('article');
    article_7.setAttribute('class', 'article');
    new_posts.append(article_7);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Best Practices for Optimizing Your Abandoned Cart Emails";
    article_7.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_7.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "SEPTEMBER 11, 2020"; // date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "AARON WISEMAN"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "2 COMMENTS"; // content
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_7.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = `The majority of online shopping carts get abandoned before the checkout is completed. Learn how to address this issue with emails.`;
    article_7.append(brief);

    // article 8
    var  article_8 = document.createElement('article');
    article_8.setAttribute('class', 'article');
    new_posts.append(article_8);

    // HEADING
    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Laravel Email Testing: Mailtrap vs. Other Options";
    article_8.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_8.append(hr);

    // date_author_comment
    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "SEPTEMBER 1, 2020"; // date
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "PIOTR MALEK"; // author
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENTS"; // content
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_8.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = `There are several popular methods for email testing in Laravel. We analyze how each one works and what they're great for.`;
    article_8.append(brief);

    // DON'T TOUCH THIS AT ALL
    var older_posts = document.createElement('div');
    older_posts.setAttribute('class', 'older_posts');
    content.append(older_posts);
    
    // olderPosts
    var olderPosts = document.createElement('button');
    olderPosts.textContent = "OLDER POSTS";
    olderPosts.setAttribute('class', 'olderPosts')
    new_posts.append(olderPosts)
    
    olderPosts.addEventListener('mouseout', original_color)
    olderPosts.addEventListener('mouseover', bgcolor)
    olderPosts.addEventListener('click', old_articles)
    
}

// function_for_BLOG BUTTON
function open_blog(){

    // prevents_creating_multiPages
    var divs = document.querySelectorAll('div');
    
    divs.forEach(function(el){
        el.remove();
    })

    // BLOG_Background_image
    var blog_div = document.createElement('div');
    blog_div.setAttribute('id','blog_image');
    body.append(blog_div);

    var picture = document.createElement('picture');
    var img = document.createElement('img');
    img.setAttribute('src', "https://blog.mailtrap.io/wp-content/uploads/2020/08/cropped-mt-new-top-picture@2x.png");
    img.setAttribute('class', 'header_image')
    picture.append(img)
    blog_div.append(picture)

    // BLOG_Content
    var content = document.createElement('div');
    content.setAttribute('id', 'content');
    body.append(content)

    // BLOG_Content_newPosts
    var new_posts = document.createElement('div');
    new_posts.setAttribute('class', 'new_posts');
    content.append(new_posts);

    // newPosts_articles
    // article 1
    var  article_1 = document.createElement('article');
    article_1.setAttribute('class', 'article');
    new_posts.append(article_1);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "[Case Study] The Software House + Mailtrap";
    article_1.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_1.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "FEBRUARY 2, 2021";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "    " + "    " + "        " + "  /  " + "     " + "BY" + "    ";
    author_name.setAttribute('class', 'name_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "DIANA LE";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','comment_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_1.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Not one, but two unique use cases in one piece! Read how The Software House integrated Mailtrap into its projects.";
    article_1.append(brief)

    // article 2
    var  article_2 = document.createElement('article');
    article_2.setAttribute('class', 'article');
    new_posts.append(article_2);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "How to Integrate Email Marketing and Social Media";
    article_2.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_2.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "JANUARY 31, 2021";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "OVI NEGREANIN";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_2.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Learn how to combine email marketing with social media and take your business to the next level.";
    article_2.append(brief)

    // article 3
    var  article_3 = document.createElement('article');
    article_3.setAttribute('class', 'article');
    new_posts.append(article_3);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Should Your Team Have a Dedicated Email Developer?";
    article_3.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_3.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "JANUARY 27, 2021";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "GALINA DIVAKOVA";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_3.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Are you wondering whether you should hire a dedicated email developer or not? This article will provide you with a deeper insight and help you make the right decision.";
    article_3.append(brief)

    // article 4
    var  article_4 = document.createElement('article');
    article_4.setAttribute('class', 'article');
    new_posts.append(article_4);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Email marketing in 2021: COVID-19 impact, predictions & expert opinions";
    article_4.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_4.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "JANUARY 23, 2021";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "DMYTRO ZAICHENKO";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_4.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Sending emails in CakePHP is simple. We explain how to compose an email, set up a transporter, build a template, and customize them.";
    article_4.append(brief)

    // article 5
    var  article_5 = document.createElement('article');
    article_5.setAttribute('class', 'article');
    new_posts.append(article_5);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Best Email Marketing Practices To Retain Customers";
    article_5.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_5.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "JANUARY 21, 2021";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "MICHELLE DEERY";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_5.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Email is an excellent tool for retaining your customers. Check out these tips straight from the folks at Wishpond.";
    article_5.append(brief)

    // article 6
    var  article_6 = document.createElement('article');
    article_6.setAttribute('class', 'article');
    new_posts.append(article_6);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "Understanding Your SpamAssassin Score and Fixing It";
    article_6.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_6.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "DECEMBER 30, 2020";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "PIOTR MALEK";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_6.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "The SpamAssassin score is a great indication of the quality of your emails. We explain how to interpret its results and improve upon them.";
    article_6.append(brief);

    // article 7
    var  article_7 = document.createElement('article');
    article_7.setAttribute('class', 'article');
    new_posts.append(article_7);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "CakePHP Email Sending";
    article_7.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_7.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "DECEMBER 23, 2020";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "PIOTR MALEK";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_7.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Sending emails in CakePHP is simple. We explain how to compose an email, set up a transporter, build a template, and customize them.";
    article_7.append(brief)

    // article 8
    var  article_8 = document.createElement('article');
    article_8.setAttribute('class', 'article');
    new_posts.append(article_8);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "11 Tips to Improve Your Email Marketing in 2021";
    article_8.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_8.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "NOVEMBER 30, 2020";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "IRINA NICA";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "1 COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_8.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "The new year can be an excellent opportinity for improving your email marketing. Our friends from HubSpot share what to focus on in 2021.";
    article_8.append(brief)

    // article 9
    var  article_9 = document.createElement('article');
    article_9.setAttribute('class', 'article');
    new_posts.append(article_9);

    var head = document.createElement('a');
    head.setAttribute('class','head')
    head.setAttribute('href', '');
    head.textContent = "How to boost your Email marketing with reporting?";
    article_9.append(head)

    var hr = document.createElement('hr');
    hr.setAttribute('class', 'line_gap')
    article_9.append(hr);

    var tag_line = document.createElement('p');
    var date = document.createElement('a');
    tag_line.textContent = "ON  ";
    date.setAttribute('class', 'date')
    date.setAttribute('href', '');
    date.textContent = "NOVEMBER 26, 2020";
    var BY = document.createElement('span');
    var author_name = document.createElement('a');
    BY.textContent = "  " + "/" + "    " + "BY" + " " + " ";
    author_name.setAttribute('class', 'comment_color date');
    author_name.setAttribute('href', '');
    author_name.textContent = "WENDY GOOSEBERRY";
    var slash = document.createElement('span');
    slash.textContent = "   " + "/" + "     ";
    var comment = document.createElement('a');
    comment.setAttribute('class','name_color date');
    comment.setAttribute('href', '');
    comment.textContent = "LEAVE A COMMENT";
    tag_line.append(date);
    tag_line.append(BY);
    tag_line.append(author_name);
    tag_line.append(slash);
    tag_line.append(comment);

    article_9.append(tag_line);

    var brief = document.createElement('p');
    brief.setAttribute('class', 'art_detail')
    brief.textContent = "Proper reporting can have a major impact on your email marketing. Learn which metrics you should track and how to do it right.";
    article_9.append(brief)

    
    // BLOG_Content_olderPosts
    var older_posts = document.createElement('div');
    older_posts.setAttribute('class', 'older_posts');
    content.append(older_posts);

    // olderPosts_searchBox
    var input_box = document.createElement('input');
    input_box.setAttribute('type', 'search');
    input_box.setAttribute('placeholder', 'Search..');
    input_box.setAttribute('class', 'search_box')
    older_posts.append(input_box);

    // olderPosts_searchButton            
    var search_button = document.createElement('button');
    search_button.setAttribute('class', 'search_button');
    older_posts.append(search_button)

    var hr = document.createElement('hr');
    older_posts.append(hr);

    // olderPosts_list1
    var heading1 = document.createElement('h3');
    heading1.setAttribute('class', 'h3')
    heading1.textContent = "CATEGORIES";
    older_posts.append(heading1)

    var ul_list = document.createElement('ul');
    var ul1_li_1 = document.createElement('li');
    var ul1_li_1_a = document.createElement('a');
    ul1_li_1.setAttribute('class', 'li')
    ul1_li_1_a.setAttribute('class', 'li')
    ul1_li_1_a.setAttribute('href', '')
    ul1_li_1_a.textContent = "Email Development and Infrastructure";
    ul1_li_1.append(ul1_li_1_a)
    older_posts.append(ul1_li_1);

    var hr = document.createElement('hr');
    older_posts.append(hr);

    var ul1_li_2 = document.createElement('li');
    var ul1_li_2_a = document.createElement('a');
    ul1_li_2.setAttribute('class', 'li')
    ul1_li_2_a.setAttribute('class', 'li')
    ul1_li_2_a.setAttribute('href', '')
    ul1_li_2_a.textContent = "Email Marketing";
    ul1_li_2.append(ul1_li_2_a)
    older_posts.append(ul1_li_2);

    var hr = document.createElement('hr');
    older_posts.append(hr);

    var ul1_li_3 = document.createElement('li');
    var ul1_li_3_a = document.createElement('a');
    ul1_li_3.setAttribute('class', 'li')
    ul1_li_3_a.setAttribute('class', 'li')
    ul1_li_3_a.setAttribute('href', '')
    ul1_li_3_a.textContent = "Email Security & Privacy";
    ul1_li_3.append(ul1_li_3_a)
    older_posts.append(ul1_li_3);
    
    var hr = document.createElement('hr');
    older_posts.append(hr);

    var ul1_li_4 = document.createElement('li');
    var ul1_li_4_a = document.createElement('a');
    ul1_li_4.setAttribute('class', 'li')
    ul1_li_4_a.setAttribute('class', 'li')
    ul1_li_4_a.setAttribute('href', '')
    ul1_li_4_a.textContent = "Email Testing";
    ul1_li_4.append(ul1_li_4_a)
    older_posts.append(ul1_li_4);
    
    var hr = document.createElement('hr');
    older_posts.append(hr);

    var ul1_li_5 = document.createElement('li');
    var ul1_li_5_a = document.createElement('a');
    ul1_li_5.setAttribute('class', 'li')
    ul1_li_5_a.setAttribute('class', 'li')
    ul1_li_5_a.setAttribute('href', '')
    ul1_li_5_a.textContent = "HTML Email";
    ul1_li_5.append(ul1_li_5_a)
    older_posts.append(ul1_li_5);
    
    var hr = document.createElement('hr');
    older_posts.append(hr);

    var ul1_li_6 = document.createElement('li');
    var ul1_li_6_a = document.createElement('a');
    ul1_li_6.setAttribute('class', 'li')
    ul1_li_6_a.setAttribute('class', 'li')
    ul1_li_6_a.setAttribute('href', '')
    ul1_li_6_a.textContent = "Mailtrap";
    ul1_li_6.append(ul1_li_6_a)
    older_posts.append(ul1_li_6);
    
    var hr2 = document.createElement('hr');
    hr2.setAttribute('class', 'hr2_gap')
    older_posts.append(hr2);

    // olderPosts_list2
    var heading2 = document.createElement('h3');
    heading2.setAttribute('class', 'h3')
    heading2.textContent = "TOP POSTS & PAGES";
    older_posts.append(heading2)
    
    var ul2_a1 = document.createElement('a');
    ul2_a1.setAttribute('class', 'li')
    ul2_a1.setAttribute('href', '')
    ul2_a1.textContent = "How to Send an Email Using Windows PowerShell";
    older_posts.append(ul2_a1)
    
    var hr = document.createElement('hr');
    hr.setAttribute('class', 'li')
    older_posts.append(hr);
    
    var ul2_a2 = document.createElement('a');
    ul2_a2.setAttribute('class', 'li')
    ul2_a2.setAttribute('href', '')
    ul2_a2.textContent = "Embedding Images in HTML Email: Have the Rules Changed?";
    older_posts.append(ul2_a2)
    
    var hr = document.createElement('hr');
    hr.setAttribute('class', 'li')
    older_posts.append(hr);
    
    var ul2_a3 = document.createElement('a');
    ul2_a3.setAttribute('class', 'li')
    ul2_a3.setAttribute('href', '')
    ul2_a3.textContent = "PHPMailer Guide";
    older_posts.append(ul2_a3)
    
    var hr = document.createElement('hr');
    hr.setAttribute('class', 'li')
    older_posts.append(hr);
    
    var ul2_a4 = document.createElement('a');
    ul2_a4.setAttribute('class', 'li')
    ul2_a4.setAttribute('href', '')
    ul2_a4.textContent = "Send Emails with Gmail API";
    older_posts.append(ul2_a4)
    
    var hr = document.createElement('hr');
    hr.setAttribute('class', 'li')
    older_posts.append(hr);
    
    var ul2_a5 = document.createElement('a');
    ul2_a5.setAttribute('class', 'li')
    ul2_a5.setAttribute('href', '')
    ul2_a5.textContent = "PHP Email Contact Form";
    older_posts.append(ul2_a5)
    
    var hr = document.createElement('hr');
    hr.setAttribute('class', 'li')
    older_posts.append(hr);

    // olderPosts
    var olderPosts = document.createElement('button');
    olderPosts.textContent = "OLDER POSTS";
    olderPosts.setAttribute('class', 'olderPosts')
    new_posts.append(olderPosts)

    olderPosts.addEventListener('mouseout', original_color)
    olderPosts.addEventListener('mouseover', bgcolor)
    olderPosts.addEventListener('click', old_articles)
    
}

blog.addEventListener('click', open_blog);