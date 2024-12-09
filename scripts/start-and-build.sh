#!/bin/bash

# 启动所有 Storybook 实例
pnpm run dev &

# 等待所有 Storybook 实例启动
wait-on tcp:20000 tcp:20001

# 如果构建目录存在，则清理旧的构建文件
if [ -d "../../storybook-static" ]; then
  pnpm exec rimraf ../../storybook-static
fi

# 执行打包任务
pnpm --filter vue-storybook run build-storybook



