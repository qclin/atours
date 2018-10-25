[AWS-SSH-Linux](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)


[AWS Node Setup](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

Authorize pem key
`chmod 400 /path-to.pem`
Tunnel into instance
`ssh -i name.pem ec2-user@aws-ip-address`

Install necessary library
`sudo yum intall git`

Install NPM
`curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -`
check latest version
`sudo yum -y install nodejs`
`sudo yum install nodejs npm --enablerepo=epel`



 GITHUB

[Generating a new SSH key and adding it to the ssh-agent](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

[Adding a new SSH key to your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
