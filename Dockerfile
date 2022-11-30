FROM mhart/alpine-node:14 as build-prod

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

# set app serving to permissive / assigned
ENV HOST=0.0.0.0
# set app port
ENV PORT=3000

CMD ["npm", "run", "start"]
