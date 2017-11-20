# node-web-app

Build Docker image:
```
docker build -t bmarinoiu/node-web-app .
```

Run web app:
```
docker run -p 8888:8080 -d bmarinoiu/node-web-app
```

Before running jobs with metrics don't forget to copy the good jar in spark job server
```
docker cp ~/.ivy2/local/org.talend.datastreams/data-streams-beamcompiler/0.6.0-SNAPSHOT/jars/data-streams-beamcompiler.jar docker_spark-jobserver_1:/opt/datastreams-deps
```
