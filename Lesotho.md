# Lesotho Visualized by Jacob Somer
## Introduction 
This sample project was created to demonstrate some of my capabilities with R. To begin this Project, I gathered data from GADM (the Database of Global Administrative Areas), and WorldPop. I then created a data frame that combined 25 different variables sorted by administrative subdivision. After extracting the raster layers into one object, I was then able to perform different functions on the data. 
        
## My Data Frame
Not every variable is presented. 
![](https://github.com/jacobsomer/jacobsomer.github.io/blob/master/Screenshot%20(14).png)
          

## Lesotho Topography
The two maps below were made using the plot() and ggplot() functions in R. One is a topographical map of Lesotho, and the other is a graph that compares the log of population and the topography of Lesotho. 

![Topography](https://github.com/jacobsomer/jacobsomer.github.io/blob/master/Lesotho_Topo.png)
![Population and Topography](https://github.com/jacobsomer/jacobsomer.github.io/blob/master/lesotho_Pop_Slope.png)


 
## Lesotho and Light Emissions 
I created the maps below in the same way as the maps above. The only difference is that I use night time lights as the variable of comparison with population. 
  
![Light Pollution](https://github.com/jacobsomer/jacobsomer.github.io/blob/master/Lesotho_At_Night.png)
![Population and Light](https://github.com/jacobsomer/jacobsomer.github.io/blob/master/lesotho_Pop_Ntl.png)

## Lesotho Data 
Below is a linear regression model that predicts population based off of multiple factors. To do this, I used the lm() (linear model) function. The image below represents all the data by using the summarize() function. 
![](https://github.com/jacobsomer/jacobsomer.github.io/blob/master/lesotho_Pop.png)
![](https://github.com/jacobsomer/jacobsomer.github.io/blob/master/Screenshot%20(12).png)
