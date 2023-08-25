---
layout: default
author_profile: false
toc: true
---

**[&laquo; Back to the main CSCI1660 website](https://cs.brown.edu/courses/csci1660/)**

# Project 0: Container environment setup

## Overview

This guide will demonstrate how to set up the tools and development environment we will use for the remaining projects in this course. We will provide our environment using a **container**, a technology that provides an abstraction of a separate OS without the full overhead of a Virtual Machine (VM). This container runs a Linux-based operating system, **Ubuntu 22.04**.

<!-- In addition, we will set up some additional tools to allow you to run Wireshark, and industry-standard packet capture tool, from inside your container. Wireshark is useful as a debugging tool, and a great way to learn about networks. -->

When we grade your work, we will use the same container environment–so if your program works in your container, it should work in our grading environment.

**Sound familiar?** If you’ve taken CS300 or CS1680, you may have worked with a similar container setup before.

<!-- We are building on CS300’s environment for this course (thanks, CS300 course staff!). -->

Our container uses slightly different components compared to the CS300 or CS1680 container, so if you already have one from another course, you still need to set up this one.


### Why are we using these tools?

**You’ll be able to develop locally.** With the container environment, we can specify a standard development environment you can run on your own machine, so your code can work on any system. Thus, you don’t need to log into the department machines to write/test your code!

<!-- * **Wireshark is awesome.** Wireshark is a powerful debugging tool for building network programs: as you send packets over the network, you can view their contents and determine if they are formatted properly. You can also perform a number of analyses over different types of network connections (like TCP), which we will see later in the course. -->

<details markdown="1"><summary markdown="span"><b><u>What if I don't have
(or don't want to use) my own computer?</u></b></summary>

 - For students who do not have access to their own laptop, note that the [Brown IT service](https://it.brown.edu/services/type/loaner-laptops-cameras-and-projectors) provides laptops you can borrow for free

 - If you do not have a personal system to use, we will make sure you have a way to develop code for this course.  If you indicated that you did not wish to use your personal system for development on HW0, we will contact you with 48 hours of the release of the first project with instructions.  **Otherwise, if access to personal computer or IT loaner laptop is an issue for you**, make sure you indicate please email the Instructor/HTAs list (`cs1660headtas@lists.brown.edu`) and we can work something out for you.  We are happy to help, but **please let us know ASAP** so we have time to set up the required resources.  

- You can still work on the first project on the department machines, if necessary.  However, the Flag and Handin projects are not compatible with department systems are not compatible with department systems, so for these you'll need to investigate one of the above options.  
</details>

<br />

{: .notice--success}
**Task**:  Follow the below instructions to set up your container environment. When you are done, see [this section](#When-you-are-done) for a short task and a link to a form to let us know you have completed the setup.


## Environment setup

To run our environment, you will need to configure **Docker**, the program that builds and runs the container. 

<!-- To run our environment, there are two components you need to configure on your host computer: **Docker**, the program that builds and runs the container, and an **X11 server**, which is responsible for displaying Wireshark’s window on your system. -->

Some of the configuration steps here differ based on your **host platform**, i.e. the system you are using to run the container, which is probably Windows, macOS, or Linux. Please make sure you follow the correct set of instructions for your platform.

### Configure docker
    
[Docker](https://docker.com) is one of the most popular container solutions and widely used in industry.

1. Download and install Docker Desktop, located
   [here](https://www.docker.com/products/docker-desktop). On Linux
   machines, follow the instructions
   [here](https://docs.docker.com/engine/install/ubuntu/).

<!-- Rhea: Not sure if the below instructions work for M1 macs -->
<!-- {: .notice--success}
<details markdown="1"><summary markdown="span"><b> Alternatively, for macOS users... </b></summary>

Another option for installing Docker on a mac is to use [Homebrew](https://brew.sh/). We recommend this method if you already have Homebrew installed. Once you have Homebrew installed, simply run the command
```shell
brew install cask docker
```

And this should install Docker on your mac for you, in application form.
</details>
::: -->

2. On Windows or macOS, open the Docker Desktop application after it
   has been installed. You may see a message similar to “Your Docker
   is starting…”. Once this message goes away, your Docker has started
   successfully!

{: .notice--info}
> <details markdown="1"><summary markdown="span"><b>Click for extra instructions for Windows-based systems </b></summary>
> 
> To run the following steps in this setup, you will need to set up Windows Subsystem for Linux (WSL). WSL should already be enabled after you install Docker, but you may still need to install a Linux distribution. This will run in an actual Linux VM, and you will run your Docker container within that VM (turtles all the way down for you!).
> <ol>
> <li><strong><span> Do I have a Linux distribution (Linux distro) installed? </span></strong>
> <ul>
> <li><span>Run </span><code>wsl -l -v</code><span> in the Command Prompt or Powershell. If there is only “Docker Desktop” and “Docker Desktop Data”, you do not have a Linux distribution installed. Proceed to step 2.</span></li>
> <li><span>Otherwise, you have a Linux distro installed. Proceed to step 3.</span></li>
> </ul>
> </li>
> <li><strong><span>Install a Linux Distribution.</span></strong>
> <ul>
> <li><span>Run </span><code>wsl --set-default-version 2</code><span> to ensure Ubuntu will be installed under WSL 2.</span></li>
> <li><span>Install “Ubuntu 22.04” from Microsoft Store.</span></li>
> <li><span>Click “Open” after Ubuntu is downloaded. A terminal will open and guide you through the installation process.</span></li>
> </ul>
> </li>
> <li><strong><span>Ensure your Linux Distribution runs on WSL 2.</span></strong>
> <ul>
> <li><span>From the output of </span><code>wsl -l -v</code><span>, find out if your Linux distro is using WSL 1 or WSL 2. If it’s WSL1:</span>
> <ul>
> <li><span>Run </span><code>wsl --set-version &lt;distro name&gt; 2</code><span> to update your distro to use WSL 2.</span></li>
> </ul>
> </li>
> </ul>
> </li>
> <li><strong><span>Set your default Linux distro</span></strong>
> <ul>
> <li><span>Run </span><code>wsl --setdefault &lt;distro-name&gt;</code><span> to configure your default Linux distro. </span><code>&lt;distro-name&gt;</code><span> should be “Ubuntu-22.04” if you installed using step 2.</span></li>
> </ul>
> </li>
> </ol>
> <p><span>Enter </span><code>wsl</code><span> in your Command Prompt or Powershell, and you’ll enter into your WSL! For the rest of the setup, <strong>run commands within your WSL Linux environment, unless otherwise specified</strong>.</span></p>
> <p><span>You will also need to connect Docker with WSL. To do so, open your Docker Desktop’s settings (on its top right corner), click “Resources”, “WSL integration”, then enable integration with your Linux distro. Then, click “Apply and Restart”.</span></p>
> </details>

3. Verify Docker is installed by executing the following:
```shell
$ docker --version
```

Once you execute the above command, you should see the Docker version number, for example:

```shell
$ docker --version
Docker version 20.10.12, build e91ed57
```

4. After installing Docker, a Docker process (the Docker daemon) will run in the background. Run the following command to verify:
```shell
$ docker info
```
If you see the following error:
```
ERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```
it means Docker hasn’t started running yet. On Windows or macOS, ensure your Docker Desktop is running. On Linux, try the command `sudo systemctl docker restart` in a terminal.

{: .notice--danger}
<details markdown="1"><summary markdown="span"><b>Important extra instructions for mac users</b></summary>

We are noticing that many mac users encounter a bug related to filesystem syncing:  **[follow these instructions to apply a fix](#Files-not-syncing-on-macOS)**.

:rotating_light: **Do not skip this step or you will encounter problems later!** 

</details>

<!-- Below (commented out) are the instructions for downloading X Server -->
<!-- ### X Server

The next component we need is an X11 server. X11, or [X Window System](https://en.wikipedia.org/wiki/X_Window_System) is the framework that powers most GUI applications in Linux. Wireshark is a GUI application, so when we run it in the container, it needs to connect to a program on the host (the X server) that can draw its window.

The X server we will install differs based on your host operating system. Select the set of instructions for your platform:

<details markdown="1"><summary markdown="span"><b> Instructions for Windows </b></summary>

1. Download and install [VcXsrv](https://sourceforge.net/projects/vcxsrv/), which is an X11 server built for Windows. Run the installer (default options should be fine), and allow the app to make changes to your computer when prompted.
2. Once VcXsrv is installed, run it from the start menu. If it asks you some questions, you can just accept the defaults and click "Next" until it goes away.
3. Once VcXsrv has finished starting, you should see it running in your system tray (bottom right corner of your screen), indicating you are ready to continue.

**Note**: Each time you restart your computer, you will need to start VcXsrv whenever you need to run the container.
</details>

<details markdown="1"><summary markdown="span"><b> Instructions for macOS </b></summary>

1. Download and install [XQuartz](https://www.xquartz.org/), which is an X11 server built for macOS.  Run the installer, and allow the app to make changes to your computer when prompted. During installation, you will be asked log out and log back into your computer, in order to update your system environment.
2. Once XQuartz is installed, open it from the applications menu. Once it opens, go to the menu bar at the top of your screen and select **XQuartz > Preferences**. Go to the **Security** tab and check the box labeled "**Allow connections from network clients**". This will allow the container to connect to your x server.
3. Quit XQuartz by selecting **XQuartz** > **Quit** from the menu bar. XQuartz should re-open automatically when you start the container later.
<details markdown="1"><summary markdown="span"> Why am I allowing network connections to XQuartz?  Isn't this a security risk? </summary>

The X server itself provides its own authentication mechanism to prevent outside hosts from connecting. When we run the container, we tell the X server to allow connections from the virtual network that Docker creates on your computer--this network is only accessible within your own system, so outside users cannot connect to it.

If you are still concerned, however, you can turn on the [macOS firewall](https://support.apple.com/en-us/HT201642), which will prevent outside connections to the X11 port at the network level.
</details> </details>

<details markdown="1"><summary markdown="span"><b> Instructions for Linux </b></summary>
If you use Linux, you most likely already have an X server installed, so you have little work to do here! There is one other small utility we need, `xhost`, a tool to control who can access the X server.

Check if you have `xhost` by entering the following command:
```shell
$ which xhost
```

If the result is `xhost not found`, you will need to install this on your system. On Ubuntu or Debian, you can do this using the command `sudo apt-get install x11-xserver-utils`. On other distributions, you will need to install a similar package (though the name may be different).

Once you have installed `xhost`, you should get a result like the following:
```shell
$ which xhost
/usr/bin/xhost
```
</details> -->

## Set up the container environment

In Docker, an environment is defined as a __Docker image__. An image specifies the OS environment that a container provides, as well as other software dependencies and configurations. The instructions defining an image are specified in a file called the __Dockerfile__.

Next, you will download the course's setup code and create the CS1660 Docker image!

{: .notice--success}
<details markdown="1"><summary markdown="span"> Instructions for macOS users </summary>
<p><span>If you’re running on macOS, you will need to install a set of Apple-recommended command-line tools via the following command:</span></p>
<p><code>xcode-select --install</code></p>
<p><span>This ensures that your computer has installed </span><code>git</code><span>, a program we’ll use below. Alternatively, you may also download and install </span><code>git</code><span> directly, following instructions </span><a href="https://git-scm.com/download/mac" target="_blank" rel="noopener"><span>here</span></a><span>.</span> After that, continue with the rest of these instructions.</p>
</details>

Do the following to set up your development environment:

1. Enter the directory on your computer where you want to do your coursework. For Windows users, choosing somewhere in the C drive will make the following steps easier.
2. Enter the following command to download our development environment to the new subdirectory `<DEV-ENVIRONMENT>` (you can choose your own name, without the brackets, `<DEV-ENVIRONMENT>` is a placeholder):
```shell
$ git clone https://github.com/brown-csci1660/container-dev.git DEV-ENVIRONMENT
```
3. Run `cd <DEV-ENVIRONMENT>` to enter the directory you just created
4. Inside this directory, do the following:

```shell
$ cd docker              # Enter the directory containing Dockerfiles
$ ./setup-container      # Loads our course docker image
```

`./setup-container` downloads the Docker image to your system (~4GB), which may take a while, so feel free to take a break!

{: .notice--info}
<details markdown="1"><summary markdown="span"> <b>Extra instructions for Windows users (if you get an error)</b></summary>
<div id="dos2unix"></div>
If you see errors along the lines of `bash: '\r': command not found` or `bash: /home/cs1660-user/.bash_profile: line 5: syntax error: unexpected end of file` when you run this script, you need to convert your files’ line endings (characters that delineate the end of a line) from Windows to UNIX (Linux) format.

To fix this, see [this section](#Windows-line-endings-%E2%80%9Cunexpected-end-of-file%E2%80%9D)
</details>

<details markdown="1"><summary markdown="span"><b><u>Why are there two Dockerfiles?</u></b></summary>

You may notice that there are two Dockerfiles in the docker folder: `Dockerfile` and `Dockerfile.arm64`. Why are there two Dockerfiles, when CS1660 only uses one container?

Machines run on different architectures, and we will explore that in our course during the semester. Computers that use an Intel chip runs on Intel’s x86 architecture. Recent Macs released by Apple begin to use Apple silicon, which run on the ARM architecture.

Different architectures use different sets of CPU instructions. Therefore, programs running on different architectures need to be compiled differently.

Students running on ARM machines use `Dockerfile.arm64`, which installs additional packages to compile x86 binaries on an ARM machine. Other students running on chips that use the x86 architecture use `Dockerfile`.
</details>

## Entering the container

Once you created your Docker image, we need to create a container running the image. In Docker terms, a _container_ is an _instance_ of an image, which is where you will actually do your work. Docker (and other container frameworks) are designed to easily start up and tear down individual containers based on a single image.

You can enter your container as follows:

1. Make sure you're inside the directory `<DEV-ENVIRONMENT>`, which is the top-level directory of the repository earlier.  (If you're following these instructions exactly, `cd ..` should get you there.)
2. Run the script `cs1660-run-docker` to start the container, and poke around to get a sense of the environment:  (__Windows users__:  If you get errors, see [this section](#Windows-line-endings-%E2%80%9Cunexpected-end-of-file%E2%80%9D) for help.)

```shell
$ ./cs1660-run-docker          # enters your Docker container
cs1660-user@9899143429a2:~$    # you're inside the container!
cs1660-user@9899143429a2:~$ uname
Linux
cs1660-user@9899143429a2:~$ echo "Hello world!"
Hello world!
cs1660-user@9899143429a2:~$ ls -lah
total 24K
drwxr-xr-x 6 cs1660-user cs1660-user  192 Jan 25 22:23 .
drwxr-xr-x 1 root       root         4.0K Jan 25 22:25 ..
-rw-r--r-- 1 cs1660-user cs1660-user  132 Jan 25 22:23 .bash_profile
-rw-r--r-- 1 cs1660-user cs1660-user 4.0K Jan 25 22:23 .bashrc
drwxr-xr-x 3 cs1660-user cs1660-user   96 Feb  1 17:22 etc
-rw-r--r-- 1 cs1660-user cs1660-user   25 Jan 25 22:23 .gdbinit
-rw-r--r-- 1 cs1660-user cs1660-user  813 Jan 25 22:23 .profile
cs1660-user@9899143429a2:~$ exit  # or Ctrl-D
```

Don’t worry if the number after `cs1660-user` is different. This is an identifier that uniquely identifies this container.

You may run any Linux commands inside this container, such as running your code for this course. To exit, enter `exit` or use `Ctrl-D`.

### Resuming your work / Multiple shells

Once you have exited the container, you can open it again by running `./cs1660-run-docker` again from the `<DEV-ENVIRONMENT>` directory. This will restart your current container if it exited in the same state it was in before.

If you want to open another shell in the same container, simply open a new terminal window on your computer, navigate to the `<DEV-ENVIRONMENT>` directory and run `cs1660-run-docker`--the script will automatically detect that the container is already running and "attach" itself to the current container.

## Working in the container environment

### Shared folders

*“If my docker container is a separate (virtual) computer than my laptop, how will I move files between the two?”*, you may ask. Great question! 

Inside of the container, your home directory (`/home/cs1660-user`, or `~`) is actually a mount of the home directory inside your `<DEV-ENVIRONMENT>` directory. Any changes you make in one will be visible in the other.

At this stage, you should test this out to make sure it works (and to make sure you understand what's happening).

1. Outside the container, go to the directory `<DEV-ENVIRONMENT>/home` and create a file and a directory.
2. Inside the container, you should see the file and folder you created inside your home directory. Delete the file, and add a file to folder (again, this is just a test to see what's happening).
3. Look at the `<DEV-ENVIRONMENT>/home` directory outside the container--you should see the changes you made in this directory.

{: .notice--info}
<details markdown="1"><summary markdown="span"> <b>Help</b></summary>

1. Outside of the container, in your `<DEV-ENVIRONMENT>/home` folder:
```shell
$ touch cool_file
$ mkdir awesome_folder
$ cd ..
$ ./cs1660-run-docker
```
2. Inside the container:
```shell
cs1660-user@9899143429a2:~$ ls # Show the file and dir we just created
awesome_folder    cool_file
cs1660-user@9899143429a2:~$ rm cool_file
cs1660-user@9899143429a2:~$ cd awesome_folder
cs1660-user@9899143429a2:~$ touch even_cooler_file
cs1660-user@9899143429a2:~$ exit # or just CTRL-D
```
3. Back outside the container:
```shell
$ cd home            # this enters the mounted directory
$ ls                 # should just show awesome_folder
awesome_folder
$ cd awesome_folder
$ ls                 # should show even_cooler_file
even_cooler_file
```
</details>

#### Using shared folders
As you work on your code, you can take advantage of shared folders, for example:
 - You could clone your repository and use git outside the container, rather than setting up SSH keys inside the container
 - You can edit your code outside the container using your favorite graphical editor (VSCode, CLion, ...)  and the compile/run your work inside the container

{: .notice--success}
<details markdown="1"><summary markdown="span"> <b>macOS Users:  Files Not Syncing?</b></summary>

We are noticing that many Mac users encounter a bug related to filesystem syncing:  **[follow these instructions to apply a fix](#Files-not-syncing-on-MacOS)**.

If issues persist, please post on Edstem or come to hours!
</details>

{: .notice--danger}
> **Warning**: If you move or rename your `<DEV-ENVIRONMENT>` directory...
> 
> Your Docker container will still try to mount to the original dev-environment path, even after you rename, remove, or move the folder `DEV-ENVIRONMENT`.
> 
> After moving your dev-environment folder, you’ll need to delete the old container and start a new container. You can do so with:
> 
> ```shell
> ./cs1660-run-docker --clean
> ```
> 
> You should be able to enter the container, and see all of your work now!

### Modifying the container

Once you have a shell inside the container, you can run any Linux command as you would on any other Linux system. Feel free to play around, install packages, etc. The user `cs1660-user` has passwordless `sudo` access inside the container, so to install a package you can simply run (eg. for `vim`):
```shell
sudo apt-get install vim
```
We have pre-installed compilers for the languages you are likely to use in this class. As you work on your projects, please use the versions of the compilers installed here so ensure that we can replicate your work when grading. If you have questions about the environment and our grading procedures, please feel free to check with us.

### Rebuilding the container environment

If you want to start a fresh container, close any container shells you have open (eg. with `exit`), go to the `<DEV-ENVIRONMENT>` directory and run `./cs1660-run-docker --clean`.

Running `./cs1660-run-docker --clean` will remove any custom packages, that you have installed and make a fresh container from the base image. This is because `--clean` removes any existing cs1660 containers on your system.

If you have custom configurations for your packages, (e.g., a `.vimrc` file for vim), the configurations are persisted even if you have used `--clean`. This is because user-specific configurations are stored in `~` (or its sub-directories), which are located in the `<DEV-ENVIRONMENT>/home` directory on your machine.


## Connecting VS Code to the container (optional but recommended)

VS Code has some *excellent* extensions that allow you to easily connect it to a running Docker container. This means you will be able to view and edit files that are in your container's home directory from within a VS Code window. To use it with our container:

1. First, download and install [VS Code](https://code.visualstudio.com/) if you don't already have it.

2. After you have installed and opened VS Code, navigate to the extensions menu (on the left panel of VS Code), and search for the **"Dev Containers"** extension by Microsoft. Click **"Install"** to install the extension.

![](https://hackmd.io/_uploads/ryxSnTW3s.png)

3. If you have not done so already, switch to a terminal and start your container by running `./cs1660-run-docker`.  For instructions on how to do this, see [here](#Entering-the-container).

3. Now that the container is running, we can tell VSCode to connect to it. To do this, switch to VS Code and click on the the small button in the very bottom left of the window (when you hover over the button, it should say **"Open a Remote Window"**)--you'll see a window like the one in the image below. Click on the option that says **"Attach to Running Container..."**. 

![](https://hackmd.io/_uploads/ryKJOAdnj.png)

4. Select the container you wish to use, i.e. `cs1660-container`:

![](https://hackmd.io/_uploads/r1iH0pZho.png)

{: .notice--info}
**Don't see the container?**  Remember that the container needs to be running for it to show up. This means you should have a terminal open inside your container (usually outside of VS Code). For instructions on starting your container, see [here](#Entering-the-container).

5. Once you select the container you want, VS Code should open a new window that looks the same as your normal window, except this one is connected to the container you chose in the previous step. You can confirm this by looking at the bottom left of the new window: it should show the name of the container, like in the image below:

![](https://hackmd.io/_uploads/SkdA5COnj.png)

6. In this new window, click on the **"Open Folder"** option--you should be able to poke around the container's filesystem and open files, just like on your host system! Yay!

![](https://hackmd.io/_uploads/rkoJyC-3i.png)

7. Once you start opening files/folders to work on code, VSCode may prompt you to install tools/plugins to work with different languages. This will occur even if you have these plugins set up on your host system--the instance of VS Code in the container is separate from the host version, so it needs to set up everything again.  At first, VS Code might need to install a lot of components, so the installation could take a while. After it finishes, everything should work like a normal VS Code instance!

## When you are done

Your container environment should now be set up, yay! 🥳

We've placed a file named `flag.txt` for you to find inside your container's home directory. In your container terminal, look around (`cd`, `ls`, `find`, `cat`, ...) to locate this file.

Once you have found it, **[fill out this form](https://forms.gle/n93RoD8H8r3PMqzXA)**--this will let us know you have set up the environment!

## Getting help

If you have questions on any stage of configuring the container environment, please contact us by coming to office hours or posting on EdStem. We are happy to help! In addition, if you notice any components that were particularly unclear--or you solve any issues on your own--please let us know we can update the documentation. This is a new component of the course, so we really appreciate your feedback!

## FAQ/Common issues

### Windows line endings ("unexpected end of file")

If you see errors along the lines of `bash: '\r': command not found` or `bash: /home/cs1660-user/.bash_profile: line 5: syntax error: unexpected end of file` when you running a file in your container directory (such as `setup-container`, you may need to convert your files’ line endings (characters that delineate the end of a line) from Windows to UNIX (Linux) format.

To do so, do the following:

1. Enter into WSL. You may do so by opening Ubuntu in the start menu or through the `wsl` command.
2. Use `cd` to navigate to the folder where you just cloned the setup repository. If you cloned your setup repository to your C: drive, use `cd /mnt/c` to enter the C: drive from your WSL.
3. Run `sudo apt-get update`, then install `dos2unix` with `sudo apt-get -y install dos2unix`.
4. Run `dos2unix ./setup-container` (or whichever file is causing the error).
5. Try repeating whatever you were doing again.  Hopefully, you shouldn't get any errors anymore!
6. If you still get errors and haven't started using your container yet, try running `dos2unix` on every file in your container home directory, like this:  `find . -type f -exec dos2unix {} \;`  


**Note**:  You may see a similar error when trying to run other files from the container.  If this occurs, run `dos2unix` on the file that had the error and try again, which should correct the issue.  If the problem persists, feel free to post on Ed.

### Files not syncing on macOS

{: .notice--info}
**Note**:  This guidance is from a previous offering of the course.  This year, we've had had luck using the **VirtioFS** filesystem option, which should provide better performance than the option listed here.  You may want to try this first.  

We've noticed an issue where Mac users have issues syncing files between their host system in the container (we'll talk more about how file syncing works in a moment).  To avoid issues later, we recommend that Mac users adjust their Docker settings as follows:
1. Open the Docker app and enter the settings menu using the gear icon, which looks like this:
![](https://hackmd.io/_uploads/Byslj2Ini.png)

2. **Uncheck** the box labeled **"Use gRPC FUSE file sharing"**, which looks like this:
![](https://hackmd.io/_uploads/ByRnjhIho.png)

3. Click **Apply & Restart**. (If you have any containers running while changing these settings, you might need to stop them or restart your computer for the changes to take effect.)

5. Close the window and open the settings menu again. Make sure the box is still unchecked.  If it isn't, restart your computer and try again.

If issues persist, please post on Edstem or come to hours!  (You can continue using the container for now, though.)


### Slow filesystem performance on Macs

{: .notice--info}
**Note**:  This fix relies on the **VirtioFS** file sharing mechanism in Docker/MacOS.  To use it, you might need to update to the latest version of Docker, and possibly update your MacOS version.  

We've noticed issues where Mac users have very slow filesystem performance inside the container--especially in the home directory, which is shared with your host system.  Docker has several methods of filesystem sharing--we've seen improved performance by switching to the **VirtioFS** method.  To do this:

1. Open the Docker app and enter the settings menu using the gear icon, which looks like this:
![](https://hackmd.io/_uploads/Byslj2Ini.png)

2. Under the "Choose file sharing implementation" select the **VirtioFS** method:
![](https://hackmd.io/_uploads/BkNWoODCj.png)

3. Click **Apply & Restart**. (If you have any containers running while changing these settings, you might need to stop them or restart your computer for the changes to take effect.)

5. Close the window and open the settings menu again. Make sure the box is still unchecked.  If it isn't, restart your computer and try again.

If issues persist, please post on Edstem or come to hours!  (You can continue using the container for now, though.)

### Windows performance and stability issues

See [Windows-specific issues](#Windows-specific-issues)


## Windows-specific issues

#### About the problem

It seems that there has been a huge memory leak in Docker on WSL (the Windows subsystem that provides Linux support) since at least August 2022.  This is not specific to this course, but a larger problem with these systems.  There seem to have been some fixes for this problem, but it's not fully solved yet.  You can read about this [here](https://github.com/docker/for-win/issues/12877) and [here](https://github.com/microsoft/WSL/issues/8725). 

To check if this is happening, you can open **Task Manager**  and check how much memory is being allocated to WSL's VM (`Vmmem`) and Docker:

![](https://hackmd.io/_uploads/r1Lk1FDRo.png)

If left unchecked, WSL and/or Docker can consume a lot of memory.  This can cause problems that are hard to predict, but usually end up causing programs to hang or crash.  

#### What can we do about it?

While there isn't a complete fix for the issue yet, there are some workarounds we can use to make Docker+WSL's memory usage more manageable and prevent it from slowing down the rest of your system.  

There are two types of workarounds:
 - **Setup changes (do these now)**:  You can adjust some settings now to help control docker's memory usage as you work on the projects
 - **As-needed fixes (skim now, then run as you need them)**:  If the Docker's memory usage gets particularly bad, there are some commands you can run to help bring it under control and get your system back

{: .notice--info}
**Please report about your experiences with this issue!** We're working to understand this problem and the best ways to solve it.  As you work on the project, please post about your experiences in [this thread on Ed](https://edstem.org/us/courses/36551/discussion/2589957).  We want to know what's working and what isn't!  

### Setup changes

#### Workaround 0. Make sure Docker is up to date

If you installed Docker for a previous class, you should make sure that you install the latest version--there seem to have been some fixes, so it's best to make sure your Docker is as up-to-date as possible.  To do this, we recommend downloading and reinstalling docker from [Docker's website](https://www.docker.com/).  

#### Workaround 1:  Limit WSL's memory usage

It's possible to limit the total amount of memory WSL can use--this won't stop the leak, but it will at least prevent WSL from making your system totally unusable.  

You can set a memory limit by editing WSL's config file.  To do this, take a look at [this guide](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/) (**specifically, [this section](https://www.aleksandrhovhannisyan.com/blog/limiting-memory-usage-in-wsl-2/#1-create-wslconfig)**), which seems to have good instructions and a good way to verify the memory limit is set correctly.  For full details on the WSL config file, see [here](https://learn.microsoft.com/en-us/windows/wsl/wsl-config). 

**How much memory should you assign to WSL?**   It depends on how much memory you have on your system, and how much WSL stuff you want to run at once.  If you have 8-16GB of memory on your system, set a limit of 2-4GB and increase it if you have issues.  

### As-needed fixes

#### Quick fix 1:  Force WSL to clean up some memory

WSL is actually a lightweight Linux virtual machine (VM) that lives on your system, which runs a modified Linux kernel that does memory management for the processes inside WSL.  To help keep the memory usage in check, we can ask WSL kernel to help cleanup unused pages in the memory (info [here](https://devblogs.microsoft.com/commandline/memory-reclaim-in-the-windows-subsystem-for-linux-2/) and [here](https://serverfault.com/questions/597115/why-drop-caches-in-linux)), like this:

1. Open a WSL terminal (Open **Command Prompt/Powershell** > **Enter `wsl`**)

2. Enter the following command (when prompted, enter the password you use to log into Windows):
```
echo 3 | sudo tee /proc/sys/vm/drop_caches
```

4. After you run the command, you will not see any terminal output.  However, you should see `Vmmem`'s memory usage decrease in Task Manager.  

#### Quick fix 2:  Shutdown WSL when you're done working (or when it gets slow)

When you're done working on the container, or you get sick of how much memory WSL is using, you can shut it down completely like this:

1. Save any files you have open in any container/WSL shell.  

2. **Open Command Prompt/Powershell** (no need to run `wsl`)

3. **Run `wsl --shutdown`**.  This will stop the WSL system and any containers, freeing up all memory.  You will lose any active state in any containers (but not saved files).  

After you shutdown WSL, Docker will complain that it was disconnected from WSL.  To continue using Docker, close and restart the Docker desktop app.  


## Attribution

This setup is a modified version of the setup used by [CSCI0300](https://cs.brown.edu/courses/csci0300) and reused with permission, which is based on [Harvard's CS61](https://cs61.seas.harvard.edu/site/2021/).

<!-- For Wireshark, we have used the setup described in [Wireshark Web Container Image](https://github.com/ffeldhaus/docker-wireshark). -->

<!-- Below (commented out) are instructions for running and using Wireshark from within the container -->

<!-- ## Running Wireshark

One of the most important features of our container environment is that you can run Wireshark to view and debug your network traffic. Wireshark is a graphical application. In general, running graphical applications inside a container is tricky and requires a certain amount of host support.

Since this container environment issue is new this year, our container supports two methods for using Wireshark. As we work with the container environment, we will see which one works better for our needs.

The primary method requires an X11 server on your host system (which you should have just installed), and provides the most seamless way to run graphical apps from the container. __If you encounter issues with the primary method, use the backup method.__ The backup method creates a virtual desktop that displays Wireshark inside a browser--this does not require any special applications on your host system, but is slower.

{: .notice--danger}
**Warning:** These instructions are new. If you run into issues, please do not hesitate to ask for help. If you resolve any issues on your own, please let us know so that we can update the instructions for next year!

### Primary method

To run Wireshark, open a terminal to your container and run the following:
```shell
$ wireshark
```

If everything worked, Wireshark should open in a new window. You have Wireshark working!

If this doesn't work, try the [backup method](https://hackmd.io/5a1lE6I0SemqfbYsLEVtyg?both#Backup-method). Also feel free to post about your experience on EdStem and we will do our best to help, or come see Nick during office hours.

When you run Wireshark this way, it will stay running in your terminal until you close the application or press Ctrl+C. In the meantime, you can get another shell inside your container by simply running `cs1680-run-docker` from another terminal window.

**Running in the background**: As an alternative, you can run Wireshark as a background process as follows, which redirects all of Wireshark's output to `/dev/null` so it doesn't clutter your terminal:
```shell
$ wireshark 2>&1 > /dev/null &  # Redirect stdout/stderr to /dev/null
```

If Wireshark is crashing for some reason, go back to the previous method and run Wireshark as a foreground process so that you can see the output.  If you have issues with Wireshark and ask us for help, we may ask you for this information.

### Backup method

Our backup method to run Wireshark leverages [Xpra](https://xpra.org), which is a clever application that provides various means of accessing X11 applications.  We will use Xpra to create a virtual desktop that runs _inside your browser_ that displays Wireshark. The interface is a bit cumbersome, and it may have some performance issues, but it _should_ always work.

1. To run Wireshark using Xpra, open a terminal inside your container and `cd` to your home directory. From there, run the following script:
```
cs1680-user@9899143429a2:~$ cs1680-scripts/run-wireshark-xpra
```
You will see a lot of output as Xpra starts up its various components. It's okay if some messages are errors--Xpra has many features we are not using, and some of these are expected to fail on startup. When it's ready, you should see a message like the following:
```
started command 'wireshark --fullscreen' with pid 54
```
This indicates that Xpra is running and is ready for you to connect to it.

2. Outside the container, open your browser and visit [http://localhost:14500](http://localhost:14500). If everything worked, this should open a web application that launches the Wireshark window. Yay!
3. On top of Wireshark's window, you should see a couple of buttons in a grey box at the top left corner of the window. This is a toolbar to control Xpra, which unfortunately blocks some of Wireshark's controls. You can click and drag the left side of this toolbar (the part with the vertical lines) to move it out of the way.

When you run Wireshark this way, it will stay running in your terminal until you close the application or press Ctrl+C. In the meantime, you can get another shell inside your container by simply running `cs1680-run-docker` from another terminal window.

This interface should let you do everything we need with Wireshark. To close Wireshark, you can simply interrupt the script in your container terminal by pressing Ctrl+C.

## Using Wireshark

Now that you have Wireshark running, it's time to use it to capture traffic!

Packet captures are performed by attaching to one of the system's network interfaces. In this case, we will be capturing on one of the virtual network interfaces inside the container, so we will only see network traffic from container processes.

### Starting a packet capture

To start a capture, select **Capture** > **Options** from the menus at the top. This will present a list of the container's network interfaces. In general, you have two choices:
 - `lo`, the loopback interface: This contains traffic to and    from `localhost`--it lives exclusively inside the container. Your own system has its own loopback network, which is local to your own machine. You should capture on this interface if you are debugging a program that connects to `localhost`, like your assignments.
 - `eth0`:  This is the container's link to the outside world (i.e., your host system, and the Internet). You should capture on this interface to see traffic that leaves the container.

For now, click on `eth0` and click **Start**.

{: .notice--danger}
**Warning:** We are aware of some issues where Wireshark crashes with a segfault when starting the capture. If this occurs, simply try again--this seems to work for us. We are looking into the issue and may post an update in the future.

### Filtering out the garbage

Once the capture starts, you will likely see a lot of X11 protocol packets (or websocket packets, if you're using the backup method). These packets are actually caused by Wireshark itself--they represent the X11 protocol messages to update Wireshark's GUI. This is because we access the container by communicating with it over the local network that lives on your host system!

Since capturing the X11 traffic is not useful to us (and will use a lot of memory), we can tell Wireshark to ignore these packets using a _capture filter_. To do this:

1. If your capture is still running, stop it by selecting **Capture** > **Stop** from the menu bar
2. Open a new capture with **Capture** > **Options**, and click on `eth0`. At the bottom of the window, enter the following text in the box labeled "Enter a capture filter..."
   - If you are using Wireshark via the **primary method**, enter `not tcp port 6000`
   - If you are using Wireshark via the **backup method**, enter `not tcp port 14500` 
	 
3. Click **Start** to start the capture.  You should see little (if any) traffic, which means the X11 traffic is being ignored!

#### Capturing something useful

We can see Wireshark in action by fetching something from the Internet. With a capture running on `eth0`, open a new terminal in your container and run: 
```shell 
$ wget -O /dev/null http://cs.brown.edu
``` 
This will use the command `wget` to fetch the CS department web page (and dump the results to `/dev/null` because we don't need them).

Look at Wireshark after running this command. You should see a number of TCP packets, and two labeled as HTTP: these are the request to load the webpage, and the response, respectively.

Click on any packet and explore the packet's header values and contents in the lower pane. This is how you can view the details of any packet, which is useful for exploration and debugging!

If you have reached this step, congratulations! Your development environment is configured and you can now run Wireshark! As we learn more about networks, we will discuss more features of Wireshark and how you can use them.

**Looking for something to do next?** Once you get started with the IP assignment, run the reference IP node and observe its traffic by capturing on the loopback interface. -->
