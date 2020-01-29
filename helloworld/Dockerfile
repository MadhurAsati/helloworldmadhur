FROM mcr.microsoft.com/windows/servercore:ltsc2019

SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop';$ProgressPreference='silentlyContinue';"]


FROM mcr.microsoft.com/windows/nanoserver:1803

WORKDIR C:\nodejs
COPY --from=installer C:\nodejs\ .
RUN SETX PATH C:\nodejs
RUN npm config set registry https://registry.npmjs.org/

WORKDIR /app

# install and cache app dependencies
COPY src/WebSpa/package.json /app/src/WebSpa/package.json

WORKDIR /app/src/WebSpa
RUN npm install


# add app
COPY . /app

# start app
CMD cd /app/src/WebSpa && ng serve --host 0.0.0.0
