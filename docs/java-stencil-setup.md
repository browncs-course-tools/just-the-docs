---
layout: single
title: Customization
nav_order: 6
---


# **CS200 Java Stencil Setup Guide** :rotating_light:

This guide contains instructions for downloading and running Java stencil code into IntelliJ.  You can use this process to load example Java code posted for a lecture, or to get started with homeworks/projects/labs in Java.  

# **Before you start**



This guide assumes that you have set up IntelliJ and Git on your system, which was part of HW0.  Specifically, if you have not done so already, you should install and configure VSCode (as well as Python and Conda) per the [**VSCode and Python setup guide**](https://docs.google.com/document/u/0/d/1ftFKMe5o91Izv9zunA5iMLjuNjnEjk1FIyRoOFl4UAU/edit).  If you encounter errors, remember to check the Troubleshooting section.  

1. **Install and configure IntelliJ per the** [**IntelliJ setup guide**](https://docs.google.com/document/u/0/d/1lpLXh4J2P6V_BIyNp8qL1_RE9_XKCkfE67v7KXwH-u8/edit) up to the “Running assignments” section.  If you encounter IntelliJ errors, remember to check the [FAQ section](https://docs.google.com/document/d/1lpLXh4J2P6V_BIyNp8qL1_RE9_XKCkfE67v7KXwH-u8/edit#bookmark=id.l3co7r1jc92n).  

<!---->

2. **Use the** [**Github guide**](https://docs.google.com/document/d/1Yqb12IzHwof9jT7TIhxzz27CwOgU8__1gSBJJmg_9Sg/edit) **to create a Github account and install git on your system** 

<!---->

3. **Create a CS200 folder on your computer** to hold all of your assignments and example code.  We recommend putting it on your Desktop (Mac) or or C: Drive (Windows) for ease of access, but you can use any path that you can find easily.  **If you already made a CS200 folder, take a moment to find it now.**  


# **How we provide code**

There are two ways we might give you code to run on your system:

- For **Homework/Project/Lab stencils**, we will give you a **Github Classroom link** (eg. https\://classroom.github.com/\<something>).  To use these, see [**Accepting Github Classroom Assignments**](https://docs.google.com/document/d/1HF2N6dR_4BikufkS8xioKVWU_BdDnxhJp631psEFOiI/edit#bookmark=id.g1v74qmpc822)
- For lecture code or other examples, we will directly provide a direct **Github Repository URL** (eg. https\://github.com/\<something>).  To use these, see [Cloning from a Repository URL](https://docs.google.com/document/d/1HF2N6dR_4BikufkS8xioKVWU_BdDnxhJp631psEFOiI/edit#heading=h.64usy4x1sjjr).


# **Accepting an Assignment on GitHub Classroom**

Github Classroom links allow us to set up a unique repository to hold your code for an assignment or project.  To use it:

1. Accept the assignment on GitHub Classroom by following the link on the handout and clicking the **“Accept this assignment”** green button, which should look like this:

![](https://lh5.googleusercontent.com/e24ijbtm6ilPvpqJnpkoJGXgQI8TwViXnpfUrzTH8RhywgirOpXk3ldUTGK9DVHPYP8cTMzn9-xIEWzQk_IX13zajCslO92kgIpWIyl2INQ7qjNrMJqcfJZr3s1hVhJwFp6lR7rKn9ZGIuYtEDrKtNs)

2. Github will now create your repo–wait a few seconds and refresh the page.   When it’s done, you should see a link to your shiny new Github repository (like the example below), **click this link to view it!**  

![](https://lh5.googleusercontent.com/HIdc97on6mWkEUPnnEZOKuVHfwcoUtWs2SCD6cLoVt14OKIin8yieLtXG8m_abE4tUuF2qFIqV8gg1tiJPUezq4J6SaqEstrvz23qqtruWM8z4aHb6BvSK2YQGlZoyyWAer4-bQHvv7MYse8d2aeup4)

This link will open the main view of your repository on Github.  Next, we need to download (or clone, in git terms) the repository to our system:  to do this, see the next section.  


# **Cloning a repository by URL**

Once we have a link to a repository, you can download it to your computer by “cloning” the repository into your CS200 folder with git.  To do this:

1. If you have not done so already, open the repository link in your browser.  
2. On the Github page, click the green **“Code”** button and **click the copy button** to copy the link, like this:

![](https://lh4.googleusercontent.com/_V1M4NA1nN5pkpukIUYq5GkHj5Wgs-u6riNRsIiyP1Ah8bFrmk11XjFgfejS4QkzEusi7ZE5T_v9YPBlmj0hsSmrqptm6l1T9TtM0zAIldIRgHbP9fwv5k1ZgDe1HMF_49XqYVv8IHShmbwU_W0Y2mU)


## **Getting to your CS200 folder**

To clone the repo, we’ll need to use the terminal to browse to your CS200 folder and run git to download the code.  If you’re new with using a terminal, that’s okay!  Follow the steps below for a step-by-step guide.  Even if you’re more comfortable using a terminal, skim all of these instructions to make sure you understand the process–you might learn some useful shortcuts!

1. First, open the terminal on your computer:

<!---->

1. **On Mac**: Go to **Applications** > **_Utilities_** > open **Terminal**

   1. Alternatively, you can open _Spotlight Search_ (keyboard shortcut is “Command+Space’’), search for “terminal”, and open the first application listed

2. **On Windows**:  Open the Search bar,  enter “command prompt”, and click the first application listed

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Quick intro to terminals:**  Just like when you browse folders in a window on your computer, in a terminal, there’s a concept of a current “working directory”, which is the folder where the terminal is “looking” at one time.  The working directory is usually displayed in the terminal’s _prompt_, which is the line where you enter commands.  To see the current working directory, enter the command `pwd`, like this:![](https://lh6.googleusercontent.com/oJsnBp0QIgjMUPYJ2a9-sxX1E2pfuB8C3lIw8X4ZRQRkQXFfiYHTE7rhFzmjZ1JN-aHCpF9LnNA6JVAWSEAyj4M_OwfQ5CEEpj-LfIkhNjVzlXOZqi-ZuZbJW7pAZ_CH3Ne16e36G_8lLwflef-1sSM)Here, the working directory is the user `deemer`’s Desktop folder.  Another way to write this is `~/Desktop`, where `~` is shorthand for a user’s home folder.   |

2. Next, we need to navigate to our CS200 folder in the terminal.  There a few ways to do this–use whichever you feel most comfortable:

       **Shortcut method (Mac)**

1. Outside your terminal, open up your CS200 folder in Finder (the standard file/folder browser on Mac)
2. Drag the Finder window onto the Terminal icon on your dock (like the figure below).  This should open a terminal already pointing to your CS200 folder!  Pretty awesome, right??  😎\
   (If this doesn’t work for you, just go with the classic method.)

![](https://lh5.googleusercontent.com/9KCz7A0ARot_kCxpu9LB8soSARcZWWnyUFfnkGiR6uH2dq5SlViBHgmJu2NnewpDrkQEgKNtLEdP4kfa_xHWe3vdG7h1kZ3VwHGyVj8gRc6L-xG4gOL17yiPozJ-pGekzFgCj7hJQtAONFFYrD8g7sM)

**Shortcut method (Windows)**

1. Outside your terminal, open up your CS200 folder the way you’d normally search for a file
2. Inside the folder, **hold down Shift and Right Click** in the blank area in the folder view
3. In the menu that opens, click “**Open PowerShell window here**”.  (PowerShell is another terminal program inside Windows, similar to command prompt.)  

&#x20;    If this method doesn’t work for you, just try the Classic method.  

**Classic method**

1. In your terminal, use the `cd` command to enter into your CS200 folder.  The command for this will depend on where your CS200 folder is located on your computer–here’s what it should look like based on the folder locations we’ve recommended, but you can adjust it if you picked a different spot:

- **Mac (CS200 folder on Desktop)**:  `cd ~/Desktop/CS200` or \
  `cd /Users/<your name>/Desktop/CS200`
- **Windows (CS200 folder on C: drive)**: `cd C:\CS200` 

For more information on using terminal commands, take a look at our [Terminal Guide](https://docs.google.com/document/d/1kZ7AfOhUkZW1zqL7KWfEGuWvuyQZfPTK6x4jvCGFYlY/edit?usp=sharing), which describes `cd` and other commands in more detail.  

At this stage, you should now have a terminal open to your CS200 directory!  Now we can finally clone the repository.  


## **Cloning the repository with git**

Next, you can download the repository to your computer–in git, this is called “cloning” the repository.  To do this:

1. Enter the following command using the [link you copied from Github](https://docs.google.com/document/d/1HF2N6dR_4BikufkS8xioKVWU_BdDnxhJp631psEFOiI/edit#bookmark=id.aknxl71jhcqu). \
   &#x20;`git clone <pasted link>` (without the “`<>`” brackets)

   When you run the command, you should see output something like this:
   ```
      Cloning into '<name of repository>'...
      remote: Enumerating objects: 39, done.
      remote: Counting objects: 100% (39/39), done.
      remote: Compressing objects: 100% (33/33), done.
      remote: Total 39 (delta 8), reused 37 (delta 6), pack-reused 0
      Receiving objects: 100% (39/39), 372.97 KiB | 6.32 MiB/s, done.
      Resolving deltas: 100% (8/8), done.
```

2. If your output looks like this, your repository was cloned successfully, yay!  You should now see a folder in your CS200 with the same name as the repository you cloned .  This is where the code lives! \
If you received an error in your terminal, or you don’t see a folder, [make sure that your repository link is correct](https://docs.google.com/document/d/1HF2N6dR_4BikufkS8xioKVWU_BdDnxhJp631psEFOiI/edit#bookmark=id.aknxl71jhcqu).  

Once you have cloned your repository, you can open it in IntelliJ to start working with the code!  


# **Opening a Stencil in IntelliJ**

4. To open your project, open IntelliJ and go to **File > Open** and browse to the folder you cloned in the previous step.   Select the folder and click **Open.**
5. If IntelliJ displays a warning about security settings, click **“Trust Project”** to allow IntelliJ to open the code.  From there, IntelliJ should open its main window, which looks like this:

   ![](https://lh4.googleusercontent.com/mgVi1t-yP_esAXet5iEQHl6dQXTTEdkkwore794Xhn0JYHQk-SUqtdKucxTn23SFlP29jo8ra4nv_jT932ZDotbE5ep0R1BsMJ-fyw7Xs78lHSsCTm28epL_eGCe-7CSTtVCkjXF1W1ExHwXoG54FdU)

6. If you’re new to IntelliJ, this might look like a lot.  That’s okay!  We’ll learn more about the different parts in the coming weeks.  For now, look at the sidebar on the left, which shows all the files in the project.  **Expand the** `src` **folder (and** `sol`**, if it’s there)**--here you will see the Java files you’ll be using.  

7. When downloading any new project, the first step is to make sure the project is set up correctly.  To do this, open any file with `Test` in the name (eg. `AnimalsTest`, in the image above) , which contains code that’s easy to run–we’ll use this to test our IDE settings.  
8. At the top of the file, you may see a yellow bar at the top saying “Project JDK not defined.”  If so, click **“Setup SDK”** and select the highest version of Java available on your system (17 or higher), like this:

   ![](https://lh3.googleusercontent.com/1lD0zuJ1cDjMKFpPAwgTS_fVFOqKQA553ouTJXqIBsOvzuoh-1xCFjcVLzlX_ESlNVsQUReS1aUPuG5vo-fiZH6vKlVK_2zB70H--X_euzd9F7gZIWqZdVoXwFFRWQUeQgAzojsfPIeqyCf9-MK8V5Y)

9. Once you’ve set your SDK, IntelliJ should start automatically building and checking the project–this may take a minute or two, depending on the size of the project–you should see a progress bar at the bottom-right  of the IntelliJ window that will tell if it’s still working.  

10. Once IntelliJ is done setting up, you should see any red underlines in the code disappear.  This means the code is ready to test!  To run the tests, **look at the top of the test file for a green icon** (circle or arrow) next to a line labeled `public class SomeThingHereTest { `like this (we’ll talk about what it all means soon!):

      ![](https://lh3.googleusercontent.com/9yEGWn2sEceipBNcy51VjYcbxpE0vZ4H9583smKZ8Lj8Tq-yq_71uLlop-AjbLVjQmqmeqWe3fBLkIwCzdX0gg12kHdgbLGH4zAgLGA7Ojnc33951XzWjByulo-6rFOEsliPJejps_2owLxaYYBjvvM)

      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
      | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
      | **_Note:_** **If you don’t have a green icon, or the code has lots of red underlines:**  make sure you have set your SDK (step 9).  **If you still have issues, this might be an issue with the stencil project**–check the [FAQ section of the IntelliJ guide](https://docs.google.com/document/d/1lpLXh4J2P6V_BIyNp8qL1_RE9_XKCkfE67v7KXwH-u8/edit#bookmark=id.l3co7r1jc92n) or the IntelliJ setup megathread on Ed to see if any of the issues match your situation.  If you still have questions, feel free to post in this thread on Ed or ask us in hours!   |

11. Click the green icon and select **Run** `SomethingHereTest` (where `SomethingHereTest` is the name of the file)
12. If all goes well, IntelliJ will build the project code and run any tests–this may take a minute.  Once it’s done, a window should pop up showing the status of the tests.  **You don’t need to know what the output means yet–we’ll unpack it all over time in class.**  For now, just look for a window to pop up like one of these:

   **Example with passing tests**

   ![](https://lh3.googleusercontent.com/TWXq2eZ0L5_4b05Oyj4VfNVNK0PM0QM-waJx5iVEQGJiE-pe_CWxcxGonRsrBwz_CGyHGx7gfskc8t4MurksMcq14YAtUDY2TmcIQ-NiKhlUjIOcPax_yFH852v_8ufSV71PQPCKD85UucHiyBG_2Yk)

   **Example with failing tests (okay for now!)**

   ![](https://lh5.googleusercontent.com/5uuWIE48Ks8hcJxU61wUCticCGxia0R7Aj5sP9CDVK2Px0nrrQUSTIPIUeTfqVep--fZ_tJh2sWIqeS_q115vUQb-63ZVwGxHnysWBrvE4bChaFtRz05nnKuNaiPFmxbA2J5kUqmtdJGZtoO57L-kFQ)

13. **You may see some tests listed as failing–this is okay!**  This will occur in stencil code, usually because there are some components that haven’t been implemented yet!  For now, we just need to run the tests, which proves our IDE is working, yay!  


14. If you were able to run the tests (whether they pass or fail), you’re done!  You have now successfully tested running code in your IDE! \
    **If IntelliJ produced an error instead of running the tests, there may be an issue with your IDE, or the stencil project itself.**  Check the [FAQ section of the IntelliJ guide](https://docs.google.com/document/d/1lpLXh4J2P6V_BIyNp8qL1_RE9_XKCkfE67v7KXwH-u8/edit#bookmark=id.l3co7r1jc92n) or the IntelliJ setup megathread on Ed to see if any of the issues match your situation.  If you still have questions, feel free to post in this thread on Ed or ask us in hours! 

***

_Please let us know if you find any mistakes, inconsistencies, or confusing language in this or any other CSCI0200 document by filling out the_ [_anonymous feedback form_](https://forms.gle/8HY7tDdgM98fk2e19)_._
