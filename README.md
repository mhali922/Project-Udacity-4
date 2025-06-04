# Project-Udacity-4
Movie Picture Pipeline project

1.) Movie-app folder
  That contains docker file and the dependencies for frontend and backend
  
2.) .github/workflows
  This contains ci and cd yaml for both front end and back end which runs on the event of the push to repository
  Build, test and containerize the frontend and backend late pushed to the AWS ECR.
  
3.) CI and CD yaml also contains the deply stage that runs the container on EKS cluster.

4.) Please find the below screen shots :

  ![image](https://github.com/user-attachments/assets/7aa363cf-ee87-4fee-bb24-39588c84b6a6)


  K8 Cluster component -

EKS cluster
  ![image](https://github.com/user-attachments/assets/63cf707e-43af-4a01-9c4f-cfbc7b034326)

LoadBalanacer :

![image](https://github.com/user-attachments/assets/a3d472d3-f2f9-4f7f-ad32-6d0b5ae65ac7)

 Worker nodes
  ![image](https://github.com/user-attachments/assets/2c60fb57-ee38-488f-93a0-b0f07fe4312d)

  FROM Bastion HOST info - 

![image](https://github.com/user-attachments/assets/3e74721a-2b59-4cc8-a590-450ba044a978)


Final Output -
![image](https://github.com/user-attachments/assets/20f5607c-a0f0-4555-a33b-743a9e0e65c1)






  
